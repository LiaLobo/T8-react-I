import React from 'react';
import './Contador';

const BotaoFinalizar = (props) => {
    return (
        props.contador !== 0 && (
            <div>
              <button onClick={props.onClickFinaliza}>Finalizar Contador</button>
            </div>
        )
    )
}

export default BotaoFinalizar;