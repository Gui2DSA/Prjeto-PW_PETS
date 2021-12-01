import React, { useState } from "react"
import './contato.css'

const Contato = props => {

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ numero, setNumero ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    return (
        <div>
            <div className="titulo">
               <h1>Contato</h1>
            </div>

            <div className="conteudo">

            <h2>Caso você queira entrar em contato conosco para relatar mals tratos á
            animais, ou para saber mais sobre como cuidar do seu bichiho, ou para saber onde e como adotar um, entre 
            em contato conosco através do nosso e-mail ou pelo nosso número de telefone:</h2>
            <p></p>
            <h2>e-mail: salvaPETS@gmail.com</h2>
            <p></p>
            <h2>telefone: (+55) 21 94876-8003</h2>
            <p></p>
            <h2>Ou se você preferir, deixe seu nome, número e e-mail abaixo para entrar-mos em
            contato. </h2>
            <p></p>

                <input
                    className="campo"
                    type="text" value={nome}
                    placeholder="Dogote seu nome:"
                    onChange={ e => setNome(e.target.value) }
                />
                <input
                    className="campo"
                    type="text" value={sobrenome}
                    placeholder="Dogote seu sobrenome:"
                    onChange={ e => setSobrenome(e.target.value) }
                />
                <input
                    className="campo"
                    type="text" value={numero}
                    placeholder="Dogote seu numero para contato:"
                    onChange={ e => setNumero(e.target.value) }
                />
                <input
                    className="campo"
                    type="text" value={email}
                    placeholder="Dogote seu e-mail para contato:"
                    onChange={ e => setEmail(e.target.value) }
                />

                <button
                    className="botao"
                    onClick={ () => setMensagem(`Olá ${nome} ${sobrenome}, seus dados foram enviados com sucesso!`) }
                >Enviar</button>

                <p className="mensagem">{mensagem}</p>
            </div>
        </div>
    )
}

export default Contato
