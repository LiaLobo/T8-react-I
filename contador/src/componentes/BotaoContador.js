import React from 'react';
import './Contador';

const BotaoContador = (props) => {
    return (
        props.visibilidadeCont && (
            <div>
             <button className="btnMaisUm" disabled={props.finalizar} onClick={props.onClickSoma}>+1</button>
             <button className="btnMenosUm" disabled={props.finalizar} onClick={props.onClickSubtrai}>-1</button>
             <button className="btnResetar" onClick={props.reseta}>resetar</button>
           </div>
         )
    )
}

export default BotaoContador;