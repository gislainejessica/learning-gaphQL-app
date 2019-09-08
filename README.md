 // Para criar a pasta 
 `mkdir graphql-server` 
 // Para iniciar um projeto NodeJs
 `npm init`
 // Instalar dependências necessárias para o servidor
 `npm install express express-graphql nodemon`
 // Criando script pra rodar servidor que irá atualizar automaticamnete
 on sripts => `"dev:server" : "nodemon server.js"`
 // Rodando servidor
 `npm run dev:server`
 // Nesse ponto não temos nenuma rota criada, então se tentarmos acessar a rota , vai dar erro
 Cannot GET /
 // Criando rota unica que iramos acessar para todas as requisições
 `app.use('/graphql', expressGraphql({ schema: schema, graphiql: true,}))` 
 -  expressGraphql requer uma variavel de configuração com o `schema` e uma variavel `graphigl = true`, para poder acessar e usar a IDE para fazer os teste.
// Instalando outras dependencias
 `npm install graphql`
 // Criando o schema (root query)

 // Acessar ide via browser, com a rota principal setada, podemos acessar a ide para fazer os testes no navegador
 `http://localhost:4000/graphql`
 // ---------------------- Criar nova branch para mandar pro GitHub ----------------------- //
 `git init`
 `git add *`
 `git commit -m "Mensagem"`
 `git clone http://github.com/gislainejessica/Graphql.git`
 `git branch novaBranch`
 `git checkout novaBranch`
 `git remote add novaBranch graphql-server http://github.com/gislainejessica/Graphql.git`
 `git push --set-upstream graphql-server novaBranch`