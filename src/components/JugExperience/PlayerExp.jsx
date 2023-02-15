import React from 'react'
import data from './images'
import Image from 'next/image'

const PlayerExp = () => {
    return (
        <div className='sm:-mx-6 lg:-mx-8'>
            <div className='text-center justify-center content-center'>
                <h1 className='font-bold'>Trayectoria</h1>
                <span className='block'>Como jugador</span>
            </div>
            <div className='flex justify-center content-center align-middle shadow-xl py-5'>
                <table className='table-auto divide-y bg-gray-100"'>
                    <thead className='border'>
                        <th className='px-4 py-2'>Equipo</th>
                        <th className='px-4 py-2'> Experiencia</th>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} className="bg-white">
                                <td className='border px-4 py-2'><Image src={item.image} alt={item.text} className="block m-0 w-10 h-10"/></td>
                                <td className='border px-4 py-2'>{item.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerExp