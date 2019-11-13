import React from 'react';
import './App.css'
import Contador from './componentes/Contador'; 

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  )
}

export default App;

// const contador = 7;

// const verificaContador = () => {
//   if (contador === 0) {
//     return <p>Contador não iniciado</p>
//   } else {
//     return <p>Contador iniciado</p>
//   }
// }

// const Nav = props => {
//   return (
//     <div className="navContainer">
//       <p>{props.nome}</p>
//       <p>{props.titulo}</p>
//     </div>
//   )
// }

// const elemento = <p> Sou um elemento </p>;

// function App() {
//   return (
//     <div className="App">
//       <Nav
//         nome="mell"
//         titulo="titulo"
//         numero="13"
//       />

//       <Nav
//         nome="raissa"
//         titulo="titulo"
//       />

//       <Nav
//         nome="larissa"
//         titulo="titulo bacanudo"
//       />


//       <h2>Contador</h2>
//       <p>{contador}</p>

//       {verificaContador()}
      
//       <button className="btnMaisUm">+1</button>
//       <button className="btnMenosUm">-1</button>
//       <button className="btnResetar">resetar</button>
//     </div>
//   );
// }

//Componente de Estado
// class Contador extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       contador: 0,
//       naoVisivel: true,
//       visivel: false
//     }
//   }

//   adicionarUm = () => {
//     this.setState((prevState) => {
//       return {
//         contador: prevState.contador + 1
//       }
//     })
//   }
  
//   subtraiUm = () => {
//     //setState serve para acessarmos o state que existe na class e pegar o estado anterior do objeto
//     this.setState((prevState) => {
//       return {
//         //prevState é o estado anterior do objeto que vem como um objeto também, assim o contador é uma propriedade do prevState que conseguimos acessar com o .
//         contador: prevState.contador - 1
//       }
//     })
//   }

//   reseta = () => {
//     this.setState(() => {
//       return {
//         contador: 0
//       }
//     })
//    }

//    toggle = () => {
//      this.setState(() => {
//        return {
//           naoVisivel: false,
//           visivel: true
//        }
//      })
//    }

//    fecha = () => {
//      this.setState(() => {
//        return {
//         naoVisivel: true,
//         visivel: false
//        }
//      })
//    }

//   render() {
//     return (
//       <div>
//         <p>{this.state.contador}</p>

//         <button onClick={this.toggle}>Abrir Contador</button>
//         {this.state.naoVisivel === false ? (
//            <div>
//             <button onClick={this.fecha}>Fechar Contador</button>
//             <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
//             <button className="btnMenosUm" onClick={this.subtraiUm}>-1</button>
//             <button className="btnResetar" onClick={this.reseta}>resetar</button>
//           </div>
//         ) : ''}
//       </div>
//     )
//   }
// }

