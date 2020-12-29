import React from "react";
const componente = (propos) => {
    return (
        <div>{propos.nome} <strong>{propos.sobrenome}</strong></div>
    );
};
export default componente;