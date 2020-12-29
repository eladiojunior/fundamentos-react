import React from "react";
const componente = (propos) => {
    const isPar = (propos.numero % 2 === 0);
    return (
        <div>
            {isPar ?
                <span>Par</span> :
                <span>Ímpar</span>}
        </div>
    )
};
export default componente;