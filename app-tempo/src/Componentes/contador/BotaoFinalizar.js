import React from 'react'

const BotaoFinalizar = props => {
    return (
      <div>
        <button className='btnComentario' onClick={props.cliqueCongelar}>Finalizar contador</button>
      </div>
    );
}

export default BotaoFinalizar