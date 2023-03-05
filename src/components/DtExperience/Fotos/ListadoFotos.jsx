import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image.js';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ImageZoom from "react-medium-image-zoom";

const useStyles = makeStyles({
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
    card: {
        display: 'flex',
        flexDirection: 'column',
        border: '10px double #8f6b6b #a37d7d #6b4c4c',
        margin: '10px',
        width: '100%',
        height: '100%',
        overflow: 'hidden'

    },
    media: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },
    paper: {
        position: "absolute",
        width: "80%",
        maxWidth: 600,
        // backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "none",
        textAlign: "center"
    },
    imageContainer: {
        maxWidth: "100%",
        height: "auto",
        display: "inline-block",
        margin: "auto",
    },
});





const ListadoFotos = ({ foto }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };


    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <div className='border-0'>
            <div className="shadow-xl rounded-lg overflow-hidden h-full  flex-col items-center justify-center">
                <Card className={useStyles.card} variant="outlined">
                    <CardMedia>
                        <Image
                            component="img"
                            className=" h-auto mx-auto my-4"
                            src={foto.image}
                            alt="/"
                            onClick={handleOpenModal}

                        />
        
                        <Modal open={openModal} onClose={handleCloseModal}>
                            <div class="fixed inset-0 flex items-center justify-center z-50">
                                <div className="fixed align-center rounded-t-xl text-center overflow-hidden shadow-xl transform transition-all sm:my-25 sm:align-middle sm:max-w-screen-lg sm:w-full">
                                    <div className={useStyles.imageContainer}>
                                        <Image src={foto.image} alt={foto.text} className="w-full max-w-screen-lg max-h-screen-lg "/>
                                    </div>
                                    <Button onClick={handleCloseModal} variant="contained" color="error" className='py-2 mt-2 bg-red-500'>
                                        Cerrar
                                    </Button>
                                </div>
                            </div>
                        </Modal>

                    </CardMedia>
                    <CardContent className={useStyles.content}>
                        <Typography variant="h5" component="h2" className="text-xl font-bold text-center my-2">
                            {foto.text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
}

export default ListadoFotos