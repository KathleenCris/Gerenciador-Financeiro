# 💰 Minhas Finanças Pro - Gerenciador Financeiro Pessoal

Um painel de controle financeiro completo e responsivo projetado para auxiliar no gerenciamento de receitas e despesas diárias. O projeto calcula saldos automaticamente e mantém o histórico seguro mesmo se o usuário fechar o navegador.

> **🔗 Acesse o projeto online:** https://kathleencris.github.io/Gerenciador-Financeiro/

---

## 🚀 Funcionalidades

* **Banco de Dados Persistente:** Integração com a API de `LocalStorage` do navegador, garantindo a retenção dos dados após atualizações de página ou fechamento do browser.
* **Cálculo de Fluxo de Caixa Automatizado:** Computação de saldos agregados, totalizadores de Entradas (ganhos) e Saídas (gastos) em tempo real.
* **Formatação de Moeda Nativa:** Tratamento de dados numéricos convertidos automaticamente para o padrão monetário brasileiro (`pt-BR` / R$) através do método `toLocaleString`.
* **Gerenciamento de Registros (CRUD parcial):** Inclusão dinâmica de novas transações com tratamento de IDs aleatórios exclusivos e opção de exclusão individual por registro.
* **Interface Responsiva & Mobile-First:** Design limpo e adaptável desenvolvido com Flexbox, incluindo scroll interno inteligente no histórico para evitar quebras de layout.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do formulário de entrada, cards de amostragem e contêineres principais.
* **CSS3:** Estilização baseada em variáveis visuais modernas, gradientes de fundo, efeitos dinâmicos de hover e layouts Flexbox flexíveis (`flex: 1`).
* **JavaScript (ES6+):** Manipulação assíncrona do DOM, tratamento de eventos de formulário (`submit`), uso de métodos de array de alto nível (`.filter()`, `.map()`, `.reduce()`) e persistência via objetos JSON manipulados em strings.

## 🧠 Aprendizados Principais

Desenvolver este ecossistema financeiro me consolidou conceitos essenciais do desenvolvimento de software:
1. **Persistência de Dados no Client-Side:** Entendi como transformar coleções complexas de dados de objetos em strings através de métodos de serialização (`JSON.stringify` e `JSON.parse`) para armazenamento no disco local do navegador.
2. **Métodos Funcionais de Vetores:** Pratiquei lógica avançada de manipulação de arrays substitutos aos loops tradicionais, utilizando seleções condicionais com `.filter` e acumuladores matemáticos limpos com `.reduce`.
3. **Prevenção de Efeitos Colaterais no HTML:** Implementação do método `.preventDefault()` no escopo do manipulador de formulários para reter o fluxo de execução assíncrona sem disparar recarregamentos indesejados de página.

---

## 👩‍💻 Como Executar o Projeto Localmente

1. Clone ou baixe os arquivos deste repositório.
2. Abra a raiz do projeto no seu editor de código de preferência (ex: VS Code).
3. Inicie a aplicação utilizando a extensão **Live Server** para emulação do servidor local no navegador.

---
Desenvolvido por 💻 [Kathleen Cristina (Kath)](https://www.linkedin.com/in/kathleen-cristina-monteiro-oliveira-93a2b0216/)
