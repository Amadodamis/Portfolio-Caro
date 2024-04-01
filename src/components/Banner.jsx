import React from 'react'
import "./banner.css"
import iconTelephone from "/iconos/telephone-icon.png"
import iconEng from "/iconos/English.png"
import iconSpanish from "/iconos/spain.png"
import iconAleman from "/iconos/aleman.png"


function Banner() {
    return (
        <section className='banner'>

            <nav className='push-center'>
                <ul className='lista-pestañas'>
                    <li className='li-style'>Home</li>
                    <li className='li-style'>Formacion Academica</li>
                    <li className='li-style'>Experiencia</li>
                    <li className='li-style'>Curriculum</li>
                </ul>
            </nav>

            <ul className='Contact-Language'>
                <li className='li-style telephone'>
                    <img src={iconTelephone}
                        alt='icon-telephone'
                        className='telephone-icon' />
                    <p>+54 221-123456789</p>
                </li>

                <li className='li-style telephone'><img src={iconSpanish}
                    alt='icon-spanish'
                    className='icon-lenguage' /></li>

                <li className='li-style telephone'><img src={iconEng}
                    alt='icon-eng'
                    className='icon-lenguage' /></li>


                <li className='li-style telephone'><img src={iconAleman}
                    alt='icon-aleman'
                    className='icon-lenguage' /></li>
            </ul>

        </section>
    )
}

export default Banner