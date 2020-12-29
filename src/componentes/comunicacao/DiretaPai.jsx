import React from "react";
import DiretaFilho from "./DiretaFilho";
const componente = (propos) => {
    return (
        <div>
            <DiretaFilho nome="Eladio Júnior" idade={39} isNerd={true}/>
            <DiretaFilho nome="Gustavo" idade={13} isNerd={true}/>
            <DiretaFilho nome="Beatriz" idade={14} isNerd={false}/>
        </div>
    )
};
export default componente;