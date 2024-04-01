import React from 'react'
import dArrow from "../../../public/iconos/down-arrow.png"

function arrowDown() {
    return (
        <div className='container-arrow'>
            <img src={dArrow} alt={'arrow'} className='arrow-down' />
        </div>
    )
}

export default arrowDown