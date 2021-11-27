import React from "react"
import { FaHome } from 'react-icons/fa'

const Inicio = props => (
    <div>
        <div className="titulo">
        <h1>Inicial</h1>< font size="2"><FaHome className="App-logo" /></font>
        </div>

        <div classname="conteudo">
            <h2>Olá, bem vindo!</h2>
            <p></p>
            <h2>Aqui você vai encontrar algumas instruções sobre como adotar um pet
            e o que você deve fazer caso queira doar um, lembre-se, animais são muito 
            sensíveis e delicados, por isso merecem toda a atenção e cuidado.</h2>
            <p></p>
            <h2>Hoje mais de centenas de animais em todo o Brasil são abandonados na rua, 
            ou sofrem mals tratos pelos seus donos, e existe apenas uma maneira de mudar isso, 
            você fazendo a diferença! Venha e conheça o PETS e adote ou doe um animal.</h2>
            <p></p>
            <h2>Você pode navegar pelo menú ao lado para escolher se quer conhecer os métodos 
            de como doar um animalzinho caso seja necessário ou do que fazer para adotar um novo
            membro pra família. Também temos a opção de contato.
            </h2>
            <p></p>
            <img src="https://img.r7.com/images/animais-domesticos-entenda-mais-sobre-o-que-sao-17022020100936633?dimensions=660x360"></img>
        </div>
    </div>
)

export default Inicio
