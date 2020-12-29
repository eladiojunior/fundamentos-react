import "./Input.css";
import React, { useState } from "react";
// eslint-disable-next-line
export default (propos) => {
    const [valor, setValor] = useState('');
    function onChange(event) {
        setValor(event.target.value);
    }
    return (
        <div>
            <h2>{valor}</h2>
            <div>
                {/* Componente controlado com alteração de dados */}
                <input className="input" value={valor} onChange={onChange}/>
                {/* Componente controlado ReadOnly */}
                <input className="input" value={valor} readOnly/>
                {/* Componente não controlado */}
                <input className="input" value={undefined}/>
            </div>
        </div>
    )
};