import { Grid } from '@mui/material'
import React from 'react'
import ListadoFotos from './ListadoFotos'
import { makeStyles } from '@mui/styles';
import FotosLista from './index';


const classes = makeStyles({
    grid: {
        margin: '20px 0',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '1rem',
    },
});

const FotosMain = ({ image, text }) => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex text-center justify-center py-6'>
                <h1 className="text-3xl font-bold mt-8">Mis fotos</h1>
            </div>
            <Grid container spacing={3} className={classes.root}>
                {FotosLista.map((foto, id) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ListadoFotos foto={foto} image={image} text={text} id={id} className="border-0" />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default FotosMain