import React from "react";
const componente = (propos) => {
    const gerarIdade = () => parseInt((Math.random() * 20) + 50);
    const gerarNerd = () => (Math.random() > 0.5);
    return (
        <div>
            <div>Filho</div>
            
            {/*

            <button onClick={
                function (event) {
                    propos.receberInformacoes('Eladio Júnior', 39, true)
                }
            }>Fornecer Informações</button>

            */}
            
            {/* Utilzando uma Arroaw simplificando. */}
            <button onClick={_ => propos.receberOnClick('Eladio Júnior', gerarIdade(), gerarNerd())}>Fornecer Informações</button>

        </div>
    )
};
export default componente;