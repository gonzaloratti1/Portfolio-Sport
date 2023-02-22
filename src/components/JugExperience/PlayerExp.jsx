import React from 'react'
import data from './images'
import Image from 'next/image'
import Footer from '../Footer/Footer'

const PlayerExp = () => {
    return (
        <>
            <div className='sm:-mx-6 lg:-mx-8 py-14' id='trayectoria'>
                <div className='text-center justify-center py-4'>
                    <h1 className="text-4xl font-bold mt-8 ">TRAYECTORIA</h1>
                    <span className='block text-xl text-gray-500 py-4'>Como jugador</span>
                </div>
                <div className='flex justify-center content-center align-middle      py-5 pb-8'>
                    <table className="table-auto divide-y bg-gray-100 shadow-lg rounded-lg">
                        <thead className='border'>
                            <th className='px-4 py-2'>Equipo</th>
                            <th className='px-4 py-2'> Experiencia</th>
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
            </div>
        </>
    )
}

export default PlayerExp