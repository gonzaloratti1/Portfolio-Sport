import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CursosData from './index';
import Image from 'next/image';

const Cursos = () => {
    return (
        <div className="flex flex-wrap justify-center overflow-hidden ">
            {CursosData.map((curso) => (
                <Card key={curso.id} className=" py-4 px-10 border-8 rounded-xl relative bg-white border-yellow-500 shadow-lg mx-5 my-5">
                    <Image
                        component="img"
                        src={curso.image}
                        className="object-cover w-full h-full"
                        alt={curso.text}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {curso.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Cursos