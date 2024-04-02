import React from 'react'
import "./cssFormacion/formacion.css"
import "./cssFormacion/line-story.css"
import BoxFechas from './BoxFechas'
import { textoHistoria2012, textoHistoria2022, textoHistoria2023, textoHistoria2024 } from '../../Js/textos'


function FormacionAcademica() {
    return (
        <section className='formacion-main'>

            <BoxFechas fecha='2012' box='b2012' texto={textoHistoria2012} />
            <BoxFechas fecha='2022' box='b2022' texto={textoHistoria2022} />
            <BoxFechas fecha='2023' box='b2023' texto={textoHistoria2023} />
            <BoxFechas fecha='2024' box='b2024' texto={textoHistoria2024} />

            <div className='year-line f2012 text-numbers'>2012</div>
            <div className='year-line f2013 text-numbers'>2013</div>
            <div className='year-line f2014 text-numbers'>2014</div>
            <div className='year-line f2015 text-numbers'>2015</div>
            <div className='year-line f2016 text-numbers'>2016</div>
            <div className='year-line f2017 text-numbers'>2017</div>
            <div className='year-line f2018 text-numbers'>2018</div>
            <div className='year-line f2019 text-numbers'>2019</div>
            <div className='year-line f2020 text-numbers'>2020</div>
            <div className='year-line f2021 text-numbers'>2021</div>
            <div className='year-line f2022 text-numbers'>2022</div>
            <div className='year-line f2023 text-numbers'>2023</div>
            <div className='year-line f2024 text-numbers'>2024</div>

            <div className='history-line'></div>


        </section>
    )
}

export default FormacionAcademica