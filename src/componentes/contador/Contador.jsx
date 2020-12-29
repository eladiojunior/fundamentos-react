import "./Contador.css";
import React, { Component } from "react";
import Display from "./Display";
import InputPasso from "./InputPasso";
import Acao from "./Acao";
class Contador extends Component {
    
    //Construtor da classe
    constructor(props) {
        
        super(props);

        //Estado do componente;
        this.state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passoInicial || 5,
        }
        
        //1a Forma para passar o 'this' para o metodo 'incrementar' para
        //resolver o erro do 'this';
        //>> this.incrementar = this.incrementar.bind(this);
        //Comentar e utilizar o 'arrow functions' no método 'incrementar'
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    //Aplicando 'arrow functions':
    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    };

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    };

    //Metodo para renderizar o conteúdo do 
    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <InputPasso passo={this.state.passo} setPasso={this.setPasso}/>
                <Acao onAcao={this.incrementar} label="+"/>
                <Acao onAcao={this.decrementar} label="-"/>
            </div>
        );
    };
};
export default Contador;