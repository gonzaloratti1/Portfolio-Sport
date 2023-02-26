import React from 'react'
import data from './images'
import Image from 'next/image'
import Footer from '../Footer/Footer'

const PlayerExp = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto sm:px-6 lg:px-10 overflow-x-auto py-20 mb-6' id='trayectoria'>
                <div>
                    <div className='text-center justify-center py-4'>
                        <h1 className="text-4xl font-bold mt-8 ">TRAYECTORIA</h1>
                        <span className='block text-xl text-gray-500 py-4'>Como jugador</span>
                    </div>
                </div>
                <table className="mx-auto whitespace-no-wrap rounded-lg shadow-lg bg-white divide-y divide-gray-300 overflow-hidden sm:table py-5">
                    <thead className='border'>
                        <tr>
                            <th className="text-center px-4 py-2">EQUIPO</th>
                            <th className="text-center px-4 py-2">EXPERIENCIA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} className="bg-white">
                                <td className='border px-4 py-2'><Image src={item.image} alt={item.text} className="block m-0 w-10 h-10" /></td>
                                <td className='border px-4 py-2'>{item.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PlayerExp