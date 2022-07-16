import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Siderbar from '../components/Siderbar/Index'
import About from '../components/About/Index'
import Project from '../components/Projectos/Index'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Siderbar />
            <About />
            <Project />
        </div>
    </BrowserRouter>