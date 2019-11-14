import React from 'react';

const BotaoAlternar = props => {
  return (
    <div>
      <button className='btnComentario' onClick={props.onClickMetodo}>
        {props.visibilidade === true
          ? "Fechar Contador"
          : "Abrir Contador"}
      </button>
    </div>
  )
}

export default BotaoAlternar;
