import React from 'react';
import './App.css';
import Sun from './img/sol.png';
import Cloud from './img/nuvens.png';
import CardTempo from './componentes/CardTempo'

function App() {
  return (
    <div className="previsao-container">
       <CardTempo 
        data='31/05/2019'
        descricao='Ensolarado'
        img={Sun}
        temperatura={{
          tempMax: 31,
          tempMin: 20
        }}
       />
        <CardTempo 
        data='01/06/2019'
        descricao='Nublado'
        img={Cloud}
        temperatura={{
          tempMax: 25,
          tempMin: 18
        }}
       />
    </div>
  );
}

export default App;
