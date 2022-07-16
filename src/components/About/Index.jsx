import './Index.css'
import React from 'react'

import Character from '../../assets/character.png'

export default props =>
    <div className='about'>
        <h1>Sobre mim</h1>
        <p>Olá me chamo Patrick Tavares atualmente estou estudando reactjs (frontend), fiz esse portfolio para vocês darem uma olhada no meu trabalho, não sou nada profissional, estou no ensino médio técnico onde estou estudando as matérias normais e mais algumas como Linguagens de Programação, Banco de dados, Aplicativo Web, Cultura Digital, Sistema de redes e IOT (Internet das coisas), no meu tempo livre eu gosto de estudar, conversar com amigos, jogar jogos de fps, fazer esportes físico e utilizar o que eu aprendi ao meu favor, atualmente as linguagens que eu estou utilizando é REACTJS, HTML, CSS, JAVASCRIPT e algumas bibliotecas a mais e pretendo aprender VUEJS</p>
        <div className='linha' />
        <div className='linha1' />
        <img src={Character} />
    </div>