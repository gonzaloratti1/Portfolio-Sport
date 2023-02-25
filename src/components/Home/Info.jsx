import React from 'react'
import { BsFillAwardFill } from "react-icons/bs"
import { RiTeamFill, RiFootballFill } from "react-icons/ri"

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <i className="text-4xl mb-4 inline-flex items-center justify-center"><BsFillAwardFill /></i>
                <h2 className="text-xl font-bold mb-2">Experiencia</h2>
                <span className="text-gray-500 text-sm">'Mas de 25 años en el mundo del futbol</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <i className="text-4xl mb-4 inline-flex items-center justify-center"><RiTeamFill /></i>
                <h2 className="text-xl font-bold mb-2">Equipos</h2>
                <span className="text-gray-500 text-sm">Amplia experiencia a nivel profesional de primera division</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <i className="text-4xl mb-4 inline-flex items-center justify-center"><RiFootballFill /></i>
                <h2 className="text-xl font-bold mb-2">Dedicacion</h2>
                <span className="text-gray-500 text-sm">Director tecnico, entrenador y amante del futbol</span>
            </div>
        </div>
    )
}

export default Info