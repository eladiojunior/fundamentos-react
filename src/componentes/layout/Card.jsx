import "./Card.css";
import React from 'react';
const componente = (propos) => {
    //Receber os styles via propriedades.
    const cardStyle = {
        backgroundColor: propos.color || '#F00',    //padrão vermelho(#F00);
        borderColor: propos.color || '#F00',        //padrão vermelho(#F00);
    };
    return (
        <div className="card" style={cardStyle}>
            <div className="titulo">{propos.titulo}</div>
            <div className="conteudo">
                {propos.children}
            </div>
        </div>
    );
};
export default componente;