import React from 'react'
import "./prueba.css"

function prueba() {
  return (
    <section className='section'>
      <p className='titulo'>font-family:var(--title);font-weight: 700;font-style: italic;</p>

      <p className='texto'>font-family:var(--text);font-weight: 300;</p>
      <section className='container-box-colores'>
        <div className='box box1'>var(--color1)</div>
        <div className='box box2'>var(--color2)</div>
        <div className='box box3'>var(--color3)</div>
        <div className='box box4'>var(--color4)</div>
        <div className='box box5'>var(--color5)</div>
      </section>
    </section>
  )
}

export default prueba