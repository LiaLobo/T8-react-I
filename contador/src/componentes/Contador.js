import React from 'react';
import BotaoAlternar from './BotaoAlternar';
import BotaoContador from './BotaoContador';
import BotaoFinalizar from './BotaoFinalizar'; 

//O componente de classe necessariamente precisa de duas funções: o constructor() e o render( )
export default class Contador extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        contador: 0,
        visibilidade: true,
        finalizar: false
      }
    }
  
    adicionarUm = () => {
      this.setState((prevState) => {
        return {
          contador: prevState.contador + 1
        }
      })
    }
    
    subtraiUm = () => {
      //setState serve para acessarmos o state que existe na class e pegar o estado anterior do objeto
      this.setState((prevState) => {
        return {
          //prevState é o estado anterior do objeto que vem como um objeto também, assim o contador é uma propriedade do prevState que conseguimos acessar com o .
          contador: prevState.contador - 1
        }
      })
    }
  
    reseta = () => {
      this.setState(() => {
        return {
          contador: 0,
          finalizar: false
        }
      })
     }
  
    alternarVisibilidade = () => {
      this.setState((prevState) => {
        return {
          visibilidade: !prevState.visibilidade
        }
      })
    }
  
    finaliza = () => {
      this.setState(() => {
        return {
          finalizar: true
        }
      })
    }
  
    render() {
      return (
        <div>
          <p>{this.state.contador}</p>
  
        <BotaoAlternar 
            onClickMetodo={this.alternarVisibilidade}
            visibilidade={this.state.visibilidade}
        />
  
        <BotaoContador 
            onClickSoma={this.adicionarUm}
            onClickSubtrai={this.subtraiUm}
            visibilidadeCont={this.state.visibilidade}
            finalizar={this.state.finalizar}
            reseta={this.reseta}
        />
  
        <BotaoFinalizar 
            contador={this.state.contador}
            onClickFinaliza={this.finaliza}
        />
          
        </div>
      )
    }
  }