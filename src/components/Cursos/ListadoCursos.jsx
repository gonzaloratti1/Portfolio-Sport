import { Grid } from '@mui/material'
import React from 'react'
import Cursos from './Cursos'
import CursosData from '.'

const ListadoCursos = ({ image, text, id }) => {
    return (
        <div>

            <div className='text-center justify-center py-12 content-center'>
                <h1 className="text-3xl font-bold mb-2">Diplomas</h1>
                <span className='relative text-lg text-gray-700 max-w-md border-b-2 border-gray-400 pb-2 justify-center mt-4'>Hace click para ver el diploma</span>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:gap-8">
                <div className="col-span-1">
                    {CursosData.slice(0, CursosData.length / 2).map((curso) => (
                        <div className="bg-white rounded-lg shadow-xl">
                            <Cursos curso={curso} image={image} text={text} id={id} />
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    {CursosData.slice(CursosData.length / 2, CursosData.length).map((curso) => (
                        <div className=" bg-white rounded-lg shadow-xl">
                            <Cursos curso={curso} image={image} text={text} id={id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ListadoCursos