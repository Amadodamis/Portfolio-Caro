import React from 'react'
import "./home.css"

import { lorem } from '../../Js/textos'
import fotoCaro from "../../img/fotocaro.jpg"


function Home() {
    return (
        <section className='home'>
            <section className='home-presentacion'>

                <div className='box-nombre-texto'>
                    <h1 className='titulo-home'>Carola Andrade</h1>
                    <div className='container-texto'>
                        <p className='texto-descriptivo-home'> {lorem} </p>
                    </div>

                </div>
                <img src={fotoCaro} alt={'Foto Principal carola'} className='foto-caro' />

            </section>

        </section>
    )
}

export default Home
