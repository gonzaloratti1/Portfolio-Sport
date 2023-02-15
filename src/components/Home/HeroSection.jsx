import React from 'react'
import Image from 'next/image'
import hugo from "../../assets/FotosJugador/FotoHugo02.jpg"
import Link from 'next/link'
import { MiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center my-10 py-16 '>
                <div>
                    <Image className='rounded-md shadow-2xl' src={hugo} width={300} height={300} alt="" />
                </div>
                <div className='font-bold text-4xl mt-6'>
                    <h1>Hugo Daniel Lopez</h1>
                    <p> Soy
                        <span className='font-semibold text-gray-500'>entrenador de futbol profesional</span>
                        vivo en Ituzaingo. Mi numero de telefono es .........
                    </p>
                    <Link
                    href="/experiencia"
                        className='text-neutral-100 font-semibold px-6 py-3 rounded shadow-sm hover:bg-teal-700'
                        duration={500} >
                        Experiencia
                    </Link>
                </div>
            </div>
            {/* <div>
                <Link
                href="/trayectori">
                    <MiArrowDown />
                </Link>
            </div> */}
        </section>
    )
}

export default HeroSection