import React from 'react'

export default function CardTempo(props) {
    return (
      <div className='previsao-container'>
       <div className='previsao'>
        <strong><p className='previsao__data'>
          {props.data}
        </p></strong>
        <p className='previsao__resumo'>
          {props.descricao}
        </p>
        <img className='previsao__img' src={props.img} alt='ilustração'/>
        <table>
          <tbody>
          <tr>
            <th className='previsao-temperatura__linha'>
              Máxima
            </th>
            <td className='previsao-temperatura__linha'>
              {props.temperatura.tempMax}°C
            </td>
          </tr>
  
          <tr>
            <th className='previsao-temperatura__linha'>
              Mínima
            </th>
            <td className='previsao-temperatura__linha'>
              {props.temperatura.tempMin}°C
            </td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  }