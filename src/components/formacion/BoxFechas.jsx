import React from 'react'

function BoxFechas({ fecha, box, texto }) {

    return (
        <div className={'line-' + fecha + '-story'}>
        
            <div className={'container-story-line ' + box}>

                <p className='text-story-line'> {texto} </p>

            </div>
        </div>
    )
}

export default BoxFechas

