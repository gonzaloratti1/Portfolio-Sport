import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h1 className='footer__title'>Hugo Daniel Lopez</h1>
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#experiencia' className='footer__link'>Experiencia</a>
                    </li>
                    <li>
                        <a href='#trayectoria' className='footer__link'>Trayectoria</a>
                    </li>
                </ul>
                <div className='footer__social'>
                <a href='agregar' className='footer_social-link' target="_blank"><i className='uil uil-instagram'></i></a>
                <a href='agregar' className='footer_social-link' target="_blank"><i className='uil uil-facebook'></i></a>
                <a href='agregar' className='footer_social-link' target="_blank"><i className='uil uil-mail'></i></a>
                </div>
                <span className='footer__copy'> &#169; Hugo Daniel Lopez</span>
            </div>
        </footer>
    )
}

export default Footer