import React from 'react';

const BotaoContador = props => {
  return (
    <div>
      <button
        className="btnMaisUm btnComentario"
        disabled={props.disabled}
        onClick={props.cliqueAddUm}
      >
        +1
      </button>
      <button
        className="btnMenosUm btnComentario"
        disabled={props.disabled}
        onClick={props.cliqueSubUm}
      >
        -1
      </button>
      <button className="btnResetar btnComentario" onClick={props.cliqueResetar}>
        resetar
      </button>
    </div>
  );
}

export default BotaoContador;