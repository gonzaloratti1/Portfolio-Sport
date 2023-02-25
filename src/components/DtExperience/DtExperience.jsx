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
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8" id='experiencia'>
                <div className='text-center justify-center py-12'>
                    <h1 className="text-4xl font-bold mt-8 ">EXPERIENCIA</h1>
                    <span className='block text-xl text-gray-500 py-4'>Como director tecnico</span>
                </div>
            </div>

            <div className='sm:-mx-6 lg:-mx-8 flex text-center justify-center content-center py-4 pb-8'>

                <table className='border shadow-md table-auto'>

                    <thead className='block border bg-gray-100'>
                        <tr>
                            <th className='px-4 py-2'>Equipo</th>
                            <th className='px-4 py-2  table-span text-right'> Experiencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <div className='flex items-center justify-center'>
                                <th><Image src={urquiza} alt="/" className='block m-0 w-10 h-10 content-center justify-center' /></th>
                            </div>

                            <th>Club Atlético J. J. Urquiza</th>
                        </tr>


                        <tr className='border '>
                            <td>1995</td>
                            <td>Entrenador de 5ta y 7ma division</td>
                        </tr>
                        <tr className='border'>
                            <td>1996</td>
                            <td>Entrenador de 3era division</td>
                        </tr>
                        <tr className='border'>
                            <td>1997-98</td>
                            <td>Entrenador Alterno de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td>2000-06</td>
                            <td>Entrenador Primera División</td>
                        </tr>
                        <tr className='border'>
                            <div className='flex items-center justify-center'>
                                <th><Image src={lujan} alt="/" className='block m-0 w-10 h-10' /></th>
                            </div>
                            <th>Club Luján</th>
                        </tr>
                        <tr className='border'>
                            <td>1998</td>
                            <td>Entrenador Alterno de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <div className='flex items-center justify-center'>
                                <th><Image src={almagro} alt="/" className='block m-0 w-10 h-10' /></th>
                            </div>


                            <th>Club Atlético Almágro</th>
                        </tr>
                        <tr className='border'>
                            <td>1999</td>
                            <td>Entrenador de 3ra División</td>
                        </tr>
                        <tr className='border'>
                            <td>2000</td>
                            <td>Entrenador Alterno de 1ra División</td>
                        </tr>
                        <tr>
                            <div className='flex items-center justify-center'>
                                <th><Image src={santelmo} alt="/" className='block m-0 w-10 h-10' />
                                </th></div>

                            <th>Club Atlético San Telmo</th>
                        </tr>
                        <tr className='border'>
                            <td>2000</td>
                            <td>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <div className='flex items-center justify-center'>
                                <th><Image src={sacachispas} alt="/" className='block m-0 w-10 h-10' /></th>
                            </div>
                            <th>Club Atlético Sacachispas</th>
                        </tr>
                        <tr className='border'>
                            <td>2004</td>
                            <td>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <div className='flex items-center justify-center'>
                                <th><Image src={ituzaingo} alt="/" className='block m-0 w-10 h-10' /></th>
                            </div>

                            <th>Club Atlético Ituzaingó</th>
                        </tr>
                        <tr>
                            <td>2007-08</td>
                            <td>Entrenador de Primera División</td>
                        </tr>
                        <tr className='border'>
                            <td>2008-14</td>
                            <td>Coordinador General del Futbol Juvenil</td>
                        </tr>
                        <tr className='border'>
                            <td>2015</td>
                            <td>Coordinador General del Futbol</td>
                        </tr>
                        <tr className='border'>
                            <div  className='flex items-center justify-center'>
                                <th><Image src={polonia} alt="/" className='block m-0 w-10 h-10' /></th>
                            </div>
                            <th>Polonia Futbol Club</th>
                        </tr>
                        <tr className='border'>
                            <td>2006-18</td>
                            <td>Entrenador de Primera División (Liga Lujanense AFA)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DtExperience;
