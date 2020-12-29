/**
 * Informa um valor para o componente rederizar ou não.
 * <if test={expres}>....
 * @param {Propriedade enviada} propos 
 */
const componente = (propos) => {
    //Procurar o Else nas propriedades.
    const elseChild = propos.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0];
    //Remover o Else da lista de propriedades...
    const ifChildren = propos.children.filter(child => {
        return child !== elseChild
    })
    if (propos.test) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    } else {
        return false;
    }
};
export default componente;
//Definir o componente Else...
export const Else = propos => propos.children;