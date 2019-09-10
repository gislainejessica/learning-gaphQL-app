import React, {Component} from 'react'
import './App.css'
import Launches from './components/Launches'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import logo from'./assets/logo.png'

// Inicializa o cliente apontando para a rota de requisição API do graphql (Servidor onde está rodando nossa API)
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

export class App extends Component {
  render(){
  return (
    <ApolloProvider client = {client}>
    <div className="container">
      <img src={logo} alt="Logo" style={{width:300, display:'block',margin:'auto'}}/> 
      <h1> Espaço sideral </h1>
      <Launches></Launches>
    </div>
    </ApolloProvider>
  );
  }
}


export default App;
