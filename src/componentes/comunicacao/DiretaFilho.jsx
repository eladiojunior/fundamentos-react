import React from "react";
const componente = (propos) => {
    return (
        <div>
            <span>{propos.nome} </span>
            <span><strong>{propos.idade}</strong> </span>
            <span>{propos.isNerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
};
export default componente;