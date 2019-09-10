const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors  = require('cors')

const app = express()
// Permitir Cross-origin
app.use(cors())

const PORT = process.env.PORT || 5000
// Adicionar um "midlleware de graphql (express-graphql)" no express 
// => o midlleware tem que ter algumas configs para que o express inicialize corretamnte as funcionalidades do graphql"
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Tô te ouvindo, apollo-1 na porta: ${PORT}`)
})
