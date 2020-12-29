import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line
export default (propos) => 
{
    //Utilização de um Hooks - Estado do componente (useState).
    //useState devolve um array, valor e uma função para alteração do estado];
    //const [a, b] = [valor, function]
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [isNerd, setNerd] = useState(false);
    /**
     * Função indireta para que o Pai receba as informações do Filho...
     */
    function receberInformacoes(nome, idade, isNerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(isNerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{isNerd ? 'Nerd' : 'Não é nerd'}</span>
            </div>
            <IndiretaFilho receberOnClick={receberInformacoes}></IndiretaFilho>
        </div>
    )
};