import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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


const Cursos = ({ curso }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };


    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <div className="max-w-2xl  overflow-hidden my-6" id='cursos'>
            <Card className=" bg-white  overflow-hidden flex items-center shadow-xl cursor-pointer" onClick={handleOpenModal}   >
                <CardMedia className='w-24 h-24 object-cover  ml-auto mx-8 my-2'>
                    <Image src={curso.image}
                        className="w-24 h-24 object-cover rounded-full float-left ml-4" alt={curso.text} onClick={handleOpenModal} />
                </CardMedia>

                <Modal open={openModal} onClose={handleCloseModal}>
                    <div class="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed align-center rounded-t-xl text-center overflow-hidden shadow-xl transform transition-all sm:my-25 sm:align-middle sm:max-w-screen-lg sm:w-full">
                            <div className={classes.imageContainer}>
                                <Image src={curso.image} alt={curso.text} className="w-full max-w-screen-lg max-h-screen-lg " />
                            </div>
                            <Button onClick={handleCloseModal} variant="contained" color="error" className="py-2 mt-2">
                                Cerrar
                            </Button>
                        </div>
                    </div>
                </Modal>


                <CardContent className="flex-1  flex justify-center">
                    <Typography variant="body1" className="text-gray-900 font-medium text-center text-base" onClick={handleOpenModal}>{curso.text}</Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default Cursos