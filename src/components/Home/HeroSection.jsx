import React from 'react'
import Image from 'next/image'
import hugo from "../../assets/FotosJugador/FotoHugo02.jpg"
import Info from '../Home/Info'
import { Button } from '@mui/material'

const HeroSection = () => {
    return (

        <>
            <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-32">
                <Image src={hugo} alt="Imagen del entrenador" className="rounded-md w-64 mb-4" />
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Daniel Hugo Lopez</h1>
                <div className="flex items-center mb-4">
                    <hr className="w-full border-t-2 border-gray-300 mr-4" />
                    <h2 className="text-2xl text-gray-600">Entrenador de fútbol</h2>
                    <hr className="w-full border-t-2 border-gray-300 ml-4" />
                </div>

                <p className="text-gray-700 text-center max-w-md mb-8">
                    REGISTRO AFA Nº 2510
                    A.T.F.A. Nº 903754
                </p>

                <div>
                    <Info />
                </div>

                <Button>
                    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Descargar Curriculum
                    </a>
                </Button>

            </div>



        </>
    )
}

export default HeroSection