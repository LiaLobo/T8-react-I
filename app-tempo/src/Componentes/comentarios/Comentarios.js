import React,{Component} from 'react';
import comentarios from '../../dados/comentarios'

class Comentarios extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='comentarios'>
                {
                    //Essa variável criada como argumento do map representa cada objeto do array comentarios
                    comentarios.map((comentario) => (

                        <div className="comentario">
                            <img className="comentario__perfil" src={comentario.autora.imagem} />
                            <div>
                                <h2 className="comentario__nome">{comentario.autora.nome}</h2>
                                <h3 className="comentario__subtitulo">{comentario.subtitulo}</h3>
                                <hr />
                                <p>{comentario.texto}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Comentarios