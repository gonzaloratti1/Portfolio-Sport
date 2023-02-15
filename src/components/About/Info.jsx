import React from 'react'

const Info = () => {
    return (
        <div className='about__info grid'>

            <div className='about__box'>
                <i className="uil uil-award-alt"></i>
                <h3 className='about__title'>Experiencia</h3>
                <span className='about__subtitle'>+ 25 años en el futbol</span>
            </div>

            <div className='about__box'>
                <i className="uil uil-bag"></i>
                <h3 className='about__title'>Equipos</h3>
                <span className='about__subtitle'>Amplia experiencia en nivel profesional</span>
            </div>

            <div className='about__box'>
                <i className="uil uil-trophy"></i>
                <h3 className='about__title'>Dedicacion</h3>
                <span className='about__subtitle'>Director tecnico, entrenador y amante del futbol</span>
            </div>


        </div>
    )
}

export default Info