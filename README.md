# Trabalho1

Este é um site de demonstração

## Clonar o repositório

```bash
https://github.com/glmorandi/Trabalho1.git
cd Trabalho1
```

## Configuração

Instale as dependências:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de desenvolvimento

Inicie o servidor de desenvolvimento com `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Produção

Crie a aplicação para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Visualize localmente a aplicação de produção:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

# Fluxo de desenvolvimento

A branch main é utilizada apenas para as releases, sendo necessário realizar um PR para criar uma nova release.

# Entrega de versão

As atualizações são entregues de forma automática, de acordo com a criação de uma nova release e com frequência variável.

# Correção emergencial

Em caso de uma correção emergencial, é criado uma branch que depois de corrijido o erro, é feito um PR na main, criando uma nova release.

# Processo de desenvolvimento

Onde inicia a demanda:

Inicia através de funcionários dos departamentos que abrem chamados no helpdesk

Quem define o que precisa ser feito:

O Gestor da TI

Quem define como precisa ser feito:

Gestor, desenvolvedor e a equipe

Quem faz:

Equipe de desenvolvimento ou o desenvolvedor

Quem testa:

Desenvolvedor, depois é disponibilizado em ambiente de desenvolvimento e os interessados testam e dão a confirmação.

Como o cliente recebe a atualização:

Após realizados os testes, as alterações vão para o ambiente de produção em que o cliente tem acesso.
