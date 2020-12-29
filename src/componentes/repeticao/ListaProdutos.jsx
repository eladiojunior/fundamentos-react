import React from "react";
import produtos from "../../data/produtos";
import "./ListaProdutos.css";

const componente = () => {
    const listaProdutos = produtos.map ((produto, idx) => {
        return (
            <tr key={idx}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td className="preco">{produto.preco.replace('.', ',')}</td>
            </tr>
        );
    }); 
    return (
        <div className="lista-produtos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição Produto</th>
                        <th>Preço (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
};
export default componente;