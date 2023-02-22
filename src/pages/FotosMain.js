import { Grid } from '@mui/material'
import React from 'react'
import ListadoFotos from '../components/DtExperience/Fotos/ListadoFotos'
import { makeStyles } from '@mui/styles';
import FotosLista from '../components/DtExperience/Fotos/index';
import Navbar from '<prefi>/components/Navbar/Navbar';
import Footer from '<prefi>/components/Footer/Footer';



const FotosMain = ({ image, text }) => {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8' id='Fotos'>
                <div className='flex text-center justify-center py-10'>
                    <h1 className="text-3xl font-bold mt-8">Mis fotos</h1>
                </div>
                <div className='pb-8'>
                    <Grid container spacing={3} >
                        {FotosLista.map((foto, id) => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <ListadoFotos foto={foto} image={image} text={text} id={id} className="border-0" />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FotosMain