// 1. CAPTURA DE ELEMENTOS: Pegando o formulário, a lista e os textos de valores do HTML
const form = document.getElementById("transacao-form");
const listaTransacoes = document.getElementById("lista-transacoes");
const saldoTotalTexto = document.getElementById("saldo-total");
const totalEntradasTexto = document.getElementById("total-entradas");
const totalSaidasTexto = document.getElementById("total-saidas");

const descricaoInput = document.getElementById("descricao");
const valorInput = document.getElementById("valor");
const tipoSelect = document.getElementById("tipo");

// 2. BANCO DE DADOS LOCAL (LocalStorage):
// Tentamos buscar a lista "transacoes" salva no navegador. 
// Se não encontrar nada (primeira vez jogando), criamos uma lista vazia [].
// O JSON.parse transforma o texto que estava salvo no navegador de volta em uma lista JavaScript útil.
let transacoesSalvas = JSON.parse(localStorage.getItem("transacoes")) || [];

// 3. ATUALIZAR OS VALORES DA TELA (Saldo, Entradas e Saídas)
function atualizarResumoValores() {
    // Pega os valores da lista e calcula as entradas
    const valoresEntradas = transacoesSalvas
        .filter(t => t.tipo === "entrada")
        .map(t => t.valor);
    const totalEntradas = valoresEntradas.reduce((acumulador, atual) => acumulador + atual, 0);

    // Pega os valores da lista e calcula as saídas
    const valoresSaidas = transacoesSalvas
        .filter(t => t.tipo === "saida")
        .map(t => t.valor);
    const totalSaidas = valoresSaidas.reduce((acumulador, atual) => acumulador + atual, 0);

    // Saldo final é Entradas menos Saídas
    const saldoTotal = totalEntradas - totalSaidas;

    // Injeta os valores formatados em moeda brasileira (R$) na tela
    totalEntradasTexto.innerText = totalEntradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    totalSaidasTexto.innerText = totalSaidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    saldoTotalTexto.innerText = saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 4. RENDERIZAR A LISTA NO HTML: Desenha os itens do histórico na tela
function renderizarLista() {
    // Limpa a lista antiga para não duplicar itens na tela
    listaTransacoes.innerHTML = "";

    // Executa um loop por cada transação que estiver salva
    transacoesSalvas.forEach(transacao => {
        const elementoLi = document.createElement("li");
        
        // Adiciona a classe (entrada ou saida) para o CSS pintar a bordinha esquerda com a cor certa
        elementoLi.classList.add(transacao.tipo);

        // Formata o número da transação para Real (R$)
        const valorFormatado = transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Monta a estrutura interna do nosso item de lista (Nome, Valor e Botão de Deletar)
        elementoLi.innerHTML = `
            <span>${transacao.descricao}</span>
            <span>
                ${transacao.tipo === "saida" ? "-" : ""} ${valorFormatado}
                <button class="deletar-btn" onclick="deletarTransacao(${transacao.id})">❌</button>
            </span>
        `;

        // Coloca o item criado dentro da tag <ul> no HTML
        listaTransacoes.appendChild(elementoLi);
    });
}

// 5. ATUALIZAR O BANCO DE DADOS: Salva a lista atualizada no LocalStorage do navegador
function salvarNoLocalStorage() {
    // O LocalStorage só aceita textos puros. O JSON.stringify transforma nossa lista JS em um texto string.
    localStorage.setItem("transacoes", JSON.stringify(transacoesSalvas));
}

// 6. ADICIONAR NOVA TRANSAÇÃO (Disparado quando o formulário é enviado)
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede a página de atualizar ao enviar o formulário (comportamento padrão do HTML)

    // Cria um objeto estruturado com os dados digitados pelo usuário
    const novaTransacao = {
        id: Math.floor(Math.random() * 100000), // Cria um ID único aleatório para podermos achar e deletar esse item depois
        descricao: descricaoInput.value,
        valor: parseFloat(valorInput.value), // O input nos dá um texto, o parseFloat transforma em número decimal
        tipo: tipoSelect.value
    };

    // Adiciona o novo objeto no nosso array de transações
    transacoesSalvas.push(novaTransacao);

    // Executa as atualizações na tela e no banco de dados local
    salvarNoLocalStorage();
    renderizarLista();
    atualizarResumoValores();

    // Limpa os campos de digitação para o usuário colocar a próxima transação
    form.reset();
});

// 7. EXCLUIR TRANSAÇÃO: Filtra e remove o item pelo ID único
function deletarTransacao(idDaTransacao) {
    // O filter gera uma nova lista removendo apenas o item que possui o ID do botão clicado
    transacoesSalvas = transacoesSalvas.filter(t => t.id !== idDaTransacao);

    // Atualiza tudo novamente
    salvarNoLocalStorage();
    renderizarLista();
    atualizarResumoValores();
}

// 8. INICIALIZAÇÃO: Executa as funções assim que a página carrega pela primeira vez
renderizarLista();
atualizarResumoValores();