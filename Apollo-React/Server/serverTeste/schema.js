const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require ('graphql');

const axios = require('axios');

// Tipo Uasuário 
const usuarioType = new GraphQLObjectType({
    name: 'usuario',
    fields: ({
        id:    {type: GraphQLString},
        nome:  {type: GraphQLString},
        email: {type: GraphQLString},
        idade: {type: GraphQLInt}
    })
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUsuarios:{
            type: usuarioType,
            args: {
                nome: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                idade: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/usuarios/',{
                    nome: args.nome,
                    email:args.email,
                    idade:args.idade 
                })
                .then(res => res.data)
            }
        },
        deleteUsuarios:{
            type: usuarioType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args){
                return axios.delete(`http://localhost:3000/usuarios/${args.id}`)
                .then(res => res.data)
            }
        },
        editarUsuarios:{
            type: usuarioType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                nome: {type: GraphQLString},
                email: {type: GraphQLString},
                idade: {type:GraphQLInt},
            },
            resolve(parentValue, args){
                return axios.patch(`http://localhost:3000/usuarios/${args.id}`, args)
                .then(res => res.data)
            }
        },
    }
});

// Root query (Resolve acessando os dados de testes locais)
 const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields:{
        usuario : { 
            type: usuarioType,
            args : {
                id : {type: GraphQLInt}
            },
            resolve(parentValue, args){
               return axios.get(`http://localhost:3000/usuarios/${args.id}`)
                        .then(res => res.data)
            }
        },
        usuarios :{
            type: new GraphQLList(usuarioType),
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/usuarios`)
                        .then(res => res.data)
            }
        }
     }, 
 });

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation
});