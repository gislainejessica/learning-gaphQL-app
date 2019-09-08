const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require ('graphql');

// Dados locais para fazer teste de instalação e vê se configuração está funcionando
const usuarios = [
    {id: 1, nome: "jessica", email: "jessica@email.com", idade: 30},
    {id: 2, nome: "gislaine", email: "gislaine@email.com", idade: 20},
    {id: 3, nome: "tiburcio", email: "tiburcio@email.com", idade: 10}
]

// Tipo Uasuário 
const UsuarioType = new GraphQLObjectType({
    name: 'Usuario',
    fields: () => ({
        id:    {type: GraphQLString},
        nome:  {type: GraphQLString},
        email: {type: GraphQLString},
        idade: {type: GraphQLInt}
    })
});
// Root query (Resolve acessando os dados de testes locais)
 const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields:{
        usuario : { 
            type: UsuarioType,
            args : {
                id : {type: GraphQLInt}
            },
            resolve(parentValue, args){
                for (let i = 0; i < usuarios.length; i++){
                    if (usuarios[i].id == args.id){
                        return usuarios[i]
                    }
                }
            }
        },
        usuarios :{
            type: new GraphQLList(UsuarioType),
            resolve(parentValue, args){
                return usuarios
            }
        }
     }, 
 });

module.exports = new GraphQLSchema({
    query: rootQuery
});