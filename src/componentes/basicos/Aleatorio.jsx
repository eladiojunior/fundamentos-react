import React from "react";
const componente = (propos) => {
    //destructuring assignment
    const {min, max} = propos;
    const numero = parseInt(Math.random() * (max - min)) + min;
    return (<>
        <h2>Sorteio: {numero}</h2>
        <p>Valores Mímimo: {min} e Máximo: {max}</p>
    </>)
};
export default componente;