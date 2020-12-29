import React from "react";
import If, {Else} from "./If"
const componente = (propos) => {
    const usuario = propos.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Usuário <strong>Desenvolvedor</strong>!
                </Else>
            </If>
        </div>
    )
};
export default componente;