import React from 'react'

import "./experiencia.css"
import fotoExp from "../../img/foto-experiencia.png"

function Experiencia() {
    return (
        <section className='container-experiencia'>

            <img src={fotoExp} alt='foto-experiencia' className='foto-exp' />
            <h2 className='h2-experiencia'>Experiencia</h2>
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            <div className='c4'></div>
            <div className='c5'></div>

        </section>
    )
}

export default Experiencia