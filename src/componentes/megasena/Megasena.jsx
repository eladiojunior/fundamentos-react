import "./Megasena.css";
import React, { Component } from "react";
class Megasena extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            qtdNumeros: this.props.quantidadeNumeros || 6,
            numerosSorteados: Array(this.props.quantidadeNumeros || 6).fill('?').map((caracter, idx) => {
                return (<div className="bola" key={idx}>{caracter}</div>)
            })
        }
    }
    
    sortearNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill(0)
            .reduce((nums) => {
                const numero = this.gerarNumeroUnico(1, 60, nums);
                return [...nums, numero];
            }, []).sort((n1, n2) => n1 - n2);
        const numerosStyles = numeros.map((numero, idx) => {
            return (<div className="bola" key={idx}>{numero}</div>)
        });
        this.setState({
            numerosSorteados: numerosStyles
        })
    }

    gerarNumeroUnico = (min, max, array) => {
        const numero = parseInt(Math.random() * ((max + 1) - min)) + min;
        return array.includes(numero) ? this.gerarNumeroUnico(min, max, array) : numero;
    }

    setQtdNumeros = (evento) => {
        this.setState({
            qtdNumeros: +evento.target.value
        }, this.sortearNumeros);
    } 

    render() 
    {
        return(
            <div className="megasena">
                <h3>Megasena</h3>
                <p>Sortear <strong>{this.state.qtdNumeros}</strong> números mágicos...</p>
                <div className="bolas">{this.state.numerosSorteados}</div>
                <div>
                    <label htmlFor="QtdInput">Quantidade números: </label>
                    <input type="number" min="6" max="15" id="QtdInput" value={this.state.qtdNumeros} onChange={this.setQtdNumeros}></input>
                </div>
                <button onClick={this.sortearNumeros}>Sortear</button>
            </div>
        );
    };

};
export default Megasena;