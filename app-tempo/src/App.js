import React from 'react';
import Previsao from './Componentes/previsao/Previsao';
import Contador from './Componentes/contador/Contador';
import Comentarios from './Componentes/comentarios/Comentarios';
import SolImg from './Componentes/previsao/img/sol.png';
import NuvensImg from './Componentes/previsao/img/nuvens.png';
import './App.css'

function App() {
  return (
    <div>
      <div className='previsao-container'>
        <Previsao 
          data="31/05/2019"
          resumo="Ensolarado"
          img={SolImg}
          temperatura={{
            max: 31,
            min: 20
            }}
        />

        <Previsao
          data="01/06/2019"
          resumo="Nublado"
          img={NuvensImg}
          temperatura={{
            max: 25,
            min: 18
          }}
        />
      </div>

      <Contador />
      <Comentarios />
    </div>
  );
}

export default App;
