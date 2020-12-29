import React from "react";
const componente = props => {
    return (
        <button onClick={props.onAcao}>{props.label}</button>
    );
};
export default componente;