import React from "react";
import alunos from "../../data/alunos";
const componente = () => {
    const listaAlunos = alunos.map ((aluno, idx) => {
        return (<li key={idx}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>);
    }); 
    const styleLista = { 
        listStyle: 'none',
        paddingInlineStart: '5px'
    };
    return (
        <div>
            <ul style={styleLista}>
                {listaAlunos}
            </ul>
        </div>
    )
};
export default componente;