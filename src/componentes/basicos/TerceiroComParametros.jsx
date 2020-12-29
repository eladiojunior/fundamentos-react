import React from 'react'
var componente = function TerceiroComParametros(propriedades) {
    const notaInt = Math.ceil(propriedades.nota);
    const status = notaInt >= 7 ? 'Aprovado' : 'Repovado';
    return (
        <div>
            <h2>Aluno: {propriedades.aluno}</h2>
            <p>Nota: <strong>{notaInt}</strong></p>
            <p>Situação: {status}</p>
        </div>
    );
}
export default componente;