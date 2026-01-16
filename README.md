# 📧 Frontend - Classificador Inteligente de Emails

Interface web desenvolvida como parte do desafio técnico para automação de triagem de emails utilizando Inteligência Artificial.

## 📋 Sobre o Projeto

Este projeto é o **Frontend** da solução, construído com **Next.js** e **TypeScript**. Ele fornece uma interface moderna e intuitiva para que analistas enviem conteúdos de emails (via texto ou arquivo) e visualizem o resultado da análise processada pelo Backend.

O sistema atende ao objetivo de liberar a equipe operacional de tarefas repetitivas, classificando automaticamente os emails e sugerindo respostas prontas para envio.

## 🚀 Funcionalidades

* **Múltiplas Entradas:**
    * 📝 **Texto Direto:** Campo para colar o corpo do email.
    * 📂 **Upload de Arquivos:** Suporte para arquivos `.txt` e `.pdf` com funcionalidade *Drag & Drop*.
* **Integração com IA:** Conecta-se à API Backend para processar o conteúdo via NLP e LLM (Gemini).
* **Resultados Detalhados:**
    * Classificação automática (**Produtivo** ou **Improdutivo**).
    * Exibição do nível de confiança da análise.
    * **Sugestão de Resposta:** Texto gerado automaticamente para agilizar o retorno ao cliente.
* **UX/UI Moderna:**
    * Feedback visual de carregamento (Loading states).
    * Design responsivo e limpo utilizando Tailwind CSS.
    * Dark mode support (preparado na estrutura).

## 🛠️ Tecnologias Utilizadas

* **[Next.js 14+](https://nextjs.org/)** (App Router)
* **[TypeScript](https://www.typescriptlang.org/)** (Tipagem estática)
* **[Tailwind CSS](https://tailwindcss.com/)** (Estilização)
* **[Lucide React](https://lucide.dev/)** (Ícones)
* **Fetch API** (Comunicação REST com o Backend)

## ⚙️ Instalação e Execução

### Pré-requisitos
* Node.js (v18 ou superior)
* Backend rodando (Localmente ou no Hugging Face)

### Passo a Passo

1.  **Clone o repositório e acesse a pasta:**
    ```bash
    cd desafio-front
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou se usar pnpm
    pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto para definir a URL da API. Isso permite alternar facilmente entre desenvolvimento local e produção.

    ```ini
    # Opção A: Backend rodando no Hugging Face (Produção/Teste Remoto)
    NEXT_PUBLIC_API_URL=[https://seu-usuario-desafio-backend-api.hf.space](https://seu-usuario-desafio-backend-api.hf.space)

    # Opção B: Backend rodando na sua máquina
    # NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4.  **Inicie a aplicação:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    Abra `http://localhost:3000` para utilizar a ferramenta.

## 📂 Estrutura do Projeto

```text
src/
├── app/
│   ├── layout.tsx         # Layout base da aplicação
│   └── page.tsx           # Página Principal (Dashboard)
├── component/
│   ├── AnalysisForm/      # Lógica do Formulário (Upload/Fetch)
│   ├── GenericCard/       # Componente de UI Card reutilizável
│   ├── header/            # Cabeçalho da aplicação
│   └── footer/            # Rodapé
└── ...