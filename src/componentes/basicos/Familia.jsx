import React from "react";
import FamiliaMembro from './FamiliaMembro';
const componente = (propos) => {
    //Utilizando o expred = {...propos}
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={propos.sobrenome}/>
            <FamiliaMembro nome="Tiago" {...propos}/>
            <FamiliaMembro nome="João" sobrenome="Silva"/>
        </div>
    );
};
export default componente;