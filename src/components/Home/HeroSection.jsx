import React from 'react'
import Image from 'next/image'
import hugo from "../../assets/FotosJugador/FotoHugo02.jpg"
import Info from '../Home/Info'
import { Button } from '@mui/material'
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { GrMail } from "react-icons/gr"
import Link from 'next/link'
import cv from "../../../public/CVHugo.pdf"

const HeroSection = () => {
    return (

        <>
            <div className="flex flex-col items-center justify-start min-h-screen  py-32">
                <Image src={hugo} alt="Imagen del entrenador" className="rounded-md w-64 mb-4" />
                <h1 className="text-5xl font-bold text-gray-800 mb-3 uppercase">Daniel Hugo Lopez</h1>
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Entrenador de fútbol</h2>
                </div>
                <div>
                    <p className="text-gray-700 text-center max-w-md mb-8">
                        REGISTRO AFA Nº 2510
                        A.T.F.A. Nº 903754
                    </p>
                </div>

                <div>
                    <Info />
                </div>

                <div>

                    <Button>
                        <a download  href='../../../public/CVHugo.pdf' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Descargar Curriculum
                        </a>
                    </Button>


                </div>

                <ul className="flex py-8">
                    <li className="mr-6 cursor-pointer"><AiOutlineInstagram size={25} /></li>
                    <li className="mr-6 cursor-pointer"><AiOutlineWhatsApp size={25} /></li>
                    <li className="mr-6 cursor-pointer"><GrMail size={25} /></li>
                </ul>



            </div>



        </>
    )
}

export default HeroSection