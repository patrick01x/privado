import './Index.css'
import React from 'react'

import Foto from '../../assets/Foto.svg'
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';

export default props =>
    <div className='siderbar'>
        <img className='foto' src={Foto} />
        <h1 className='myname'>Patrick Tavares</h1>
        <p className='sobremy'>Desenvolvedor Frontend, e amo criar aplicações modernas, elegantes e performáticas.</p>
        <div className="row">
            <a href="https://github.com/patrick01x"><img className='github' src={Github} /></a>
            <a href="https://www.instagram.com/pkx021x/"><img className='instagram' src={Instagram} /></a>
        </div>
    </div>