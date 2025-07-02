# KanDown 🚀

KanDown é uma ferramenta digital que integra um quadro Kanban visual com um gráfico Burndown, ideal para equipes que buscam uma gestão ágil e eficiente de projetos.

## 📖 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#️-estrutura-do-projeto)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Pré-requisitos](#️-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

## 💡 Visão Geral

O KanDown foi desenvolvido com o duplo objetivo de aprimorar e colocar em prática conhecimentos em desenvolvimento de software, enquanto oferece uma solução funcional. Ele integra a flexibilidade visual dos quadros Kanban com a clareza analítica dos gráficos Burndown, simplificando o acompanhamento do progresso de projetos. 

Com KanDown, você pode organizar tarefas em colunas personalizáveis, visualizar o fluxo de trabalho e monitorar o trabalho restante em relação ao tempo, facilitando a identificação de gargalos e a tomada de decisões rápidas. É a ferramenta perfeita para equipes que utilizam metodologias ágeis e precisam de uma visão holística do seu sprint ou projeto, além de servir como um laboratório prático para a aplicação de conceitos e tecnologias modernas.

## ✨ Funcionalidades

- **Quadros Kanban Personalizáveis**: Crie e gerencie múltiplos quadros com colunas ajustáveis para se adequar ao seu fluxo de trabalho.
- **Gestão de Tarefas Simplificada**: Adicione, edite e mova tarefas entre as colunas facilmente.
- **Integração com Burndown Chart**: Visualize o progresso do seu projeto através de um gráfico Burndown que atualiza em tempo real, mostrando o trabalho restante.
- **Interface Intuitiva**: Design focado na usabilidade para uma experiência de usuário fluida.

## 🏗️ Estrutura do Projeto

O projeto KanDown é organizado em uma arquitetura de monorepo, onde a lógica de backend (API) reside em um diretório dedicado.

```
KanDown
├──apps/
│   └──api/                 # Contém a aplicação backend (API REST)
│       ├──controllers/     # Lógica de negócio para as rotas
│       ├──interfaces/      # Definições de tipos e contratos
│       ├──prisma/          # Esquema do banco de dados e migrações
│       ├──routes/          # Definição das rotas da API
│       ├──utils/           # Utilitários e funções auxiliares
│       ├──package-lock.json
│       ├──package.json
│       ├──server.ts        # Ponto de entrada da aplicação
│       └──tsconfig.json
├──LICENSE                  # Arquivo de licença do projeto
├──package-lock.json        # Bloqueio de dependências do monorepo
├──package.json             # Definições de scripts e dependências do monorepo
├──README.md                # Este arquivo
├──tsconfig.json            # Configuração global do TypeScript
├──.env.example             # Exemplo de arquivo de variáveis de ambiente
├──.gitattributes           # Configurações do Git para atributos de arquivo
└──.gitignore               # Arquivos e diretórios a serem ignorados pelo Git
```

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza um conjunto robusto de tecnologias para garantir performance, escalabilidade e manutenibilidade.

### Backend (API):

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express.js**: Framework web para Node.js, para construir a API REST.
- **Prisma ORM**: ORM moderno para Node.js e TypeScript, utilizado para interação com o banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

## ⚙️ Pré-requisitos

Para rodar o KanDown localmente, você precisará ter o seguinte instalado em sua máquina:

- **Node.js** (versão 18.x ou superior)
- **npm** (gerenciador de pacotes do Node.js, geralmente vem com o Node.js)
- **PostgreSQL** (servidor de banco de dados, ou acesso a uma instância remota)

## 🚀 Instalação

Siga os passos abaixo para configurar e rodar o KanDown em sua máquina local.

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/KanDown.git
cd KanDown
```

### 2. Instale as dependências da API:

Navegue até o diretório da API e instale as dependências:

```bash
cd apps/api
npm install
```

Em seguida, retorne à raiz do projeto KanDown:

```bash
cd ../..
```

### 3. Configurações de Ambiente:

Crie um arquivo `.env` na raiz do projeto `apps/api` (baseado no `.env.example` fornecido). Este arquivo conterá as variáveis de ambiente para a conexão com o banco de dados e outras configurações sensíveis.

Exemplo de `.env` em `apps/api/.env`:

```env
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
PORT=3000
```

Certifique-se de substituir `user`, `password`, `host`, `port` e `database` pelos dados do seu servidor PostgreSQL.

### 4. Execute as Migrações do Banco de Dados:

Para criar o esquema do banco de dados e aplicar as migrações necessárias, execute o seguinte comando na raiz do projeto KanDown:

```bash
npx prisma migrate dev --schema=apps/api/prisma/schema.prisma
```

Este comando irá criar o banco de dados (se não existir) e as tabelas definidas no `schema.prisma`.

## 💻 Como Usar

Depois de seguir os passos de instalação, você pode iniciar a API do KanDown.

### Iniciar a API:

Navegue até o diretório da API e inicie o servidor:

```bash
cd apps/api
npm run start # ou npm run dev, se houver um script de desenvolvimento com hot-reload
```

A API estará rodando em `http://localhost:3000` (ou na porta definida no seu arquivo `.env`).

### Testar Endpoints da API:

Você pode usar ferramentas como Insomnia, Postman ou curl para interagir com a API.

- **Exemplo**: Criar um novo quadro (POST request para `/quadros`)
- **Exemplo**: Obter todos os quadros (GET request para `/quadros`)

*(Se houver um frontend separado, adicione instruções para rodá-lo aqui também, e como ele se conecta à API.)*

## 🤝 Contribuição

Ficamos felizes com sua contribuição para o projeto KanDown! Para contribuir, siga estas diretrizes:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/sua-nova-funcionalidade`).
3. Faça suas alterações e commite-as (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4. Envie suas alterações para o fork (`git push origin feature/sua-nova-funcionalidade`).
5. Abra um Pull Request detalhando as mudanças propostas.

Por favor, tente manter o estilo de código consistente e inclua testes para novas funcionalidades, se aplicável.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` na raiz do repositório.

## 📧 Contato

Para dúvidas, sugestões ou suporte, entre em contato:

**Carlos Magalhães**  
Email: carlosedsmagalhaes@gmail.com