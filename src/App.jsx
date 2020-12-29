import React from "react";

import './App.css'; //Styles

import Componente1 from './componentes/basicos/Primeiro';
import Componente2 from './componentes/basicos/SegundoComParametros';
import Componente3 from './componentes/basicos/TerceiroComParametros';
import Componente4 from './componentes/basicos/Fragmento';
import Componente5 from './componentes/basicos/Aleatorio';
import Componente6 from './componentes/layout/Card';
import Componente7 from './componentes/basicos/Familia';
import Componente8 from './componentes/basicos/Familia2';
import FamiliaMembro from './componentes/basicos/FamiliaMembro';
import Componente9 from './componentes/repeticao/ListaAlunos';
import Componente10 from './componentes/repeticao/ListaProdutos';
import Componente11 from './componentes/condicional/ParOuImpar';
import Componente12 from './componentes/condicional/UsuarioInfo';
import Componente13 from './componentes/comunicacao/DiretaPai';
import Componente14 from './componentes/comunicacao/IndiretaPai';
import Componente15 from './componentes/formulario/Input';
import ComponenteClass1 from './componentes/contador/Contador';
import ComponenteClass2 from './componentes/megasena/Megasena';

const componente = () => (
    <div className="app">
        <h1>Fundamentos React (App)</h1>
        <div className="cards">
            <Componente6 titulo="Componente Class Megasena - Desafio" color="#1ab1cd">
                <ComponenteClass2 quantidadeNumeros={6}></ComponenteClass2>
            </Componente6>
            <Componente6 titulo="Componente Class Contador" color="#424242">
                <ComponenteClass1 numeroInicial={10}></ComponenteClass1>
            </Componente6>
            <Componente6 titulo="Componente Controlado (Input)" color="#E45F56">
                <Componente15></Componente15>
            </Componente6>
            <Componente6 titulo="Comunicação Indireta" color="#8BAD39">
                <Componente14></Componente14>
            </Componente6>
            <Componente6 titulo="Comunicação Direta" color="#59323C">
                <Componente13></Componente13>
            </Componente6>
            <Componente6 titulo="Componente de Condicional" color="#226644">
                <Componente11 numero={21}></Componente11>
                <Componente12 usuario={{nome: 'Eladio Júnior'}}/>
                <Componente12 usuario={{email: 'eladiojunior@gmail.com'}}/>
            </Componente6>
            <Componente6 titulo="Componente de lista de produtos - Desafio" color="#443366">
                <Componente10></Componente10>
            </Componente6>
            <Componente6 titulo="Componente de lista de repetição" color="#FF4C65">
                <Componente9></Componente9>
            </Componente6>
            <Componente6 titulo="Componente com filhos - Dinânico" color="#00C8D8">
                <Componente8 sobrenome="Silva">
                    <FamiliaMembro nome="Felipe"/>
                    <FamiliaMembro nome="Maria"/>
                    <FamiliaMembro nome="Daniela"/>
                </Componente8>
            </Componente6>
            <Componente6 titulo="Componente com Filhos" color="#00C8F8">
                <Componente7 sobrenome="Ferreira"></Componente7>
            </Componente6>
            <Componente6 titulo="Desafio Aleatório" color="#E94C6F">
                <Componente5 min={1} max={60}></Componente5>
            </Componente6>
            <Componente6 titulo="Quarto Componente - Fragmento" color="#FA6900">
                <Componente4></Componente4>
            </Componente6>
            <Componente6 titulo="Terceiro Componente" color="#E8B71A">
                <Componente3 aluno="Eladio Júnior" nota="5.7" />
                <Componente3 aluno="Daniela Mendes Magalhães" nota={7} />
            </Componente6>
            <Componente6 titulo="Segundo Componente" color="#588C73">
                <Componente2
                    titulo="Segundo Componente com Parametros"
                    subtitulo="Definição de um novo componente com passagem de parametros." />
            </Componente6>
            <Componente6 titulo="Primeiro Componente">
                <Componente1></Componente1>
            </Componente6>
        </div>
    </div>
);
export default componente;