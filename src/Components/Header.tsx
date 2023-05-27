'use client'

import React, { useState } from 'react'

import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'

import bg1 from '../assets/background-1.png'

function Header() {

    const [Menu, SetMenu] = useState(false)

    function HandleClickMenu () {
        SetMenu(!Menu)
        
    }
    
    return (
        <>
        <header className = {`${Menu === true && 'activate'}`} style={{ backgroundImage: `url(${bg1.src})`}} id='header'>
            <div>
                <section className='Icons'>
                    <AiOutlineLinkedin color='#FEC684'/>
                    <AiOutlineGithub  color='#FEC684'/>
                </section>

                <section id='Menu' onClick={() => HandleClickMenu()}>
                    <HiMenu color='#FEC684'/>
                </section>

                <section className='Links'>
                <a href="#Home" onClick={() => SetMenu(false)}>
                    INICIO
                </a>

                <a href="#About" onClick={() => SetMenu(false)}>
                    SOBRE MIM
                </a>

                <a href="#Projetos" onClick={() => SetMenu(false)}>
                    PROJETOS
                </a>

                <a href="#Contato" onClick={() => SetMenu(false)}>
                    CONTATO
                </a>
                </section>

                <section className='Icons' id='Hidden'>
                </section>
            </div>
        </header>


        <div className='header-2' style={{display: Menu ? 'flex' : 'none'}}>
            <section className='Links'>
                <a href="#Home" onClick={() => SetMenu(false)}>
                    INICIO
                </a>

                <a href="#About" onClick={() => SetMenu(false)}>
                    SOBRE MIM
                </a>

                <a href="#Projetos" onClick={() => SetMenu(false)}>
                    PROJETOS
                </a>

                <a href="#Contato" onClick={() => SetMenu(false)}>
                    CONTATO
                </a>
            </section>
        </div>

    </>
  )
}

export default Header