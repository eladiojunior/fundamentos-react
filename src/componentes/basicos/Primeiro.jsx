import React from 'react';
var componente = function Primeiro() {
    const msg = 'Seja bem vindo(a)!';
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    );
}
export default componente;