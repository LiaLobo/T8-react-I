import React,{Component} from 'react';

class Previsao extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className='previsao'>
                    <strong><p className='previsao__data'>
                        {this.props.data}
                    </p></strong>
                <p className='previsao__resumo'>
                    {this.props.descricao}
                 </p>
                <img className='previsao__img' src={this.props.img} alt='ilustração'/>
                <table>
                    <tbody>
                        <tr>
                            <th className='previsao-temperatura__linha'>
                                Máxima
                            </th>
                            <td className='previsao-temperatura__linha'>
                                {this.props.temperatura.tempMax}°C
                            </td>
                        </tr>
       
                        <tr>
                            <th className='previsao-temperatura__linha'>
                                Mínima
                            </th>
                            <td className='previsao-temperatura__linha'>
                                {this.props.temperatura.tempMin}°C
                            </td>
                        </tr>
                    </tbody>
                </table>
             </div>
        )
    }
}

export default Previsao