import React from 'react'
import "./home.css"

import lorem from '../../public/Js/textos'
import fotoCaro from "/fotocaro.jpg"
import dArrow from "/iconos/down-arrow.png"

function Home() {
    return (<section className='home'>
        <section className='home-presentacion'>
            <div className='box-nombre-texto'>
                <h1 className='titulo-home'>Carola Andrade</h1>
                <div className='container-texto'>
                    <p className='texto-descriptivo-home'>{lorem} </p>
                </div>

            </div>
            <img src={fotoCaro} alt={'Foto Principal carola'} className='foto-caro' />

        </section>

        <img src={dArrow} alt={'arrow'} className='arrow-down' />


    </section>
    )
}

export default Home
