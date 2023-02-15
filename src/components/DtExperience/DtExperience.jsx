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
        <div className='sm:-mx-6 lg:-mx-8 flex text-center justify-center content-center py-5'>
            <table className='border'>
                <thead>
                    <tr>
                        <th><Image src={urquiza} /></th>
                        <th>Club Atlético J. J. Urquiza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border'>
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
                        <th><Image src={lujan} /></th>
                        <th>Club Luján</th>
                    </tr>
                    <tr className='border'>
                        <td>1998</td>
                        <td>Entrenador Alterno de Primera División</td>
                    </tr>
                    <tr className='border'>
                        <th><Image src={almagro} /></th>
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
                        <th><Image src={santelmo} /></th>
                        <th>Club Atlético San Telmo</th>
                    </tr>
                    <tr className='border'>
                        <td>2000</td>
                        <td>Entrenador de Primera División</td>
                    </tr>
                    <tr className='border'>
                        <th><Image src={sacachispas} /></th>
                        <th>Club Atlético Sacachispas</th>
                    </tr>
                    <tr className='border'>
                        <td>2004</td>
                        <td>Entrenador de Primera División</td>
                    </tr>
                    <tr className='border'>
                        <th><Image src={ituzaingo} /></th>
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
                        <th><Image src={polonia} /></th>
                        <th>Polonia Futbol Club</th>
                    </tr>
                    <tr className='border'>
                        <td>2006-18</td>
                        <td>Entrenador de Primera División (Liga Lujanense AFA)</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default DtExperience;
