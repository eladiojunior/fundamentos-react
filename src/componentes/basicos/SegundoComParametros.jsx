import React from 'react'
var componente = function SegundoComParametros(propriedades) {
    return (
        <div>
            <h2>{propriedades.titulo}</h2>
            <p>{propriedades.subtitulo}</p>
        </div>
    );
}
export default componente;