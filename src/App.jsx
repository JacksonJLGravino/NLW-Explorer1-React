import { useState } from 'react'
import './App.css'

export function App() {
  const [pergunta, setPergunta] = useState('')
  const [mostarPergunta, setMostrarPergunta] = useState('')
  const [resposta, setResposta] = useState('')

  const respostas = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'Concentre-se e pergunte novamente.',
    'Sinais apontam que sim.'
  ]

  function ConferirPergunta(e){

  }

  function Responder() {
    if( pergunta == ''){
      console.log('faça sua pergunta')
    }else{
      let totalRespostas = respostas.length
      let numeroAleatorio = Math.floor(Math.random() * totalRespostas)
      setResposta(respostas[numeroAleatorio])
      setMostrarPergunta(pergunta)
    }
  }

  return (
    <div className='content'>
      <div className="container">
      <img src="https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg" alt="Imagem de uma bola de cristal" />
      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
      <input placeholder='Digite sua Pergunta' onChange={e => setPergunta(e.target.value)}/>
      <button onClick={Responder}>Fazer Pergunta</button>
      <div className='resposta'>
        <p>{mostarPergunta}</p>
        <h3>{resposta}</h3>
      </div>
    </div>
    </div>
    
  )
}

