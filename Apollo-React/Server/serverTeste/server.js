const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./schema')

const app = express();
// Ponto de entrada para os clientes interagir com o graphql no servidor
app.use('/graphql', expressGraphql({
    schema: schema,
    graphiql: true,
})); 

app.listen(4000, () => {
    console.log("Esse servidor Graphql está rodando na porta 4000...")
});
