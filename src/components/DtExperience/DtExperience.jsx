import React, { useState } from 'react';
import urquiza from "../../assets/FotosEntrenador/J.J.URQUIZA.png"
import almagro from "../../assets/FotosEntrenador/Almagro.png"
import lujan from "../../assets/FotosEntrenador/LUJAN02.png"
import santelmo from "../../assets/FotosEntrenador/SAN TELMO.png"
import sacachispas from "../../assets/FotosEntrenador/SACACHISPAS.png"
import ituzaingo from "../../assets/FotosEntrenador/ITUZAINGO.png"
import polonia from "../../assets/FotosEntrenador/escudo POLONIA.jpg"
import Image from 'next/image';

const DtExperience = () => {

    return (
        <>
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-10 overflow-x-auto" id='experiencia'>
                <div className='text-center justify-center py-6'>
                    <h1 className="text-4xl font-bold mt-8 ">EXPERIENCIA</h1>
                    <span className='block text-xl text-gray-500 py-4'>Como director tecnico</span>
                </div>
            </div>

            <div className='sm:-mx-6 lg:-mx-8 flex text-center justify-center content-center'>
                <table className='shadow-lg'>
                    <thead className='border bg-gray-100'>
                        <tr>
                            <th className="text-center px-4 py-2">EQUIPO</th>
                            <th className="text-center px-4 py-2">EXPERIENCIA</th>
                        </tr>
                    </thead>

                    <tbody className='px-4 py-4'>

                        <tr>
                            <td className='border px-4 py-2'><Image src={urquiza} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <th className='border px-4 py-2'>Club Atlético J. J. Urquiza</th>
                        </tr>


                        <tr className='border '>
                            <td className='border px-4 py-2' >1995</td>
                            <td className='border px-4 py-2'>Entrenador de 5ta y 7ma division</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>1996</td>
                            <td className='border px-4 py-2'>Entrenador de 3era division</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>1997-98</td>
                            <td className='border px-4 py-2'>Entrenador Alterno de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2000-06</td>
                            <td className='border px-4 py-2'>Entrenador Primera División</td>
                        </tr>
                        <tr className='border'>

                            <td className='border px-4 py-2'><Image src={lujan} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <th className='border px-4 py-2'>Club Luján</th>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>1998</td>
                            <td className='border px-4 py-2'>Entrenador Alterno de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'><Image src={almagro} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <td className='border px-4 py-2 font-bold'>Club Atlético Almágro</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>1999</td>
                            <td className='border px-4 py-2'>Entrenador de 3ra División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2000</td>
                            <td className='border px-4 py-2'>Entrenador Alterno de 1ra División</td>
                        </tr>
                        <tr>

                            <td className='border px-4 py-2'><Image src={santelmo} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <th className='border px-4 py-2'>Club Atlético San Telmo</th>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2000</td>
                            <td className='border px-4 py-2'>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'><Image src={sacachispas} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <th className='border px-4 py-2'>Club Atlético Sacachispas</th>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2004</td>
                            <td className='border px-4 py-2'>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'><Image src={ituzaingo} alt="/" className="block m-0 w-10 h-10  mx-auto" /></td>
                            <th className='border px-4 py-2'>Club Atlético Ituzaingó</th>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>2007-08</td>
                            <td className='border px-4 py-2'>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2008-14</td>
                            <td className='border px-4 py-2'>Coordinador General del Futbol Juvenil</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2' >2015</td>
                            <td className='border px-4 py-2'>Coordinador General del Futbol</td>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'><Image src={polonia} alt="/" className="block m-0 w-10 h-10 mx-auto" /></td>

                            <th className='border px-4 py-2'>Polonia Futbol Club</th>
                        </tr>
                        <tr className='border'>
                            <td className='border px-4 py-2'>2006-18</td>
                            <td className='border px-4 py-2'>Entrenador de Primera División (Liga Lujanense AFA)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DtExperience;
