import React from 'react'
import FotosLista from './index.js'

const ListadoFotos = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center overflow-hidden ">
                {FotosLista.map((foto) => (
                    <Card key={foto.id} className=" py-4 px-10 border-8 rounded-xl relative bg-white border-yellow-500 shadow-lg mx-5 my-5">
                        <Image
                            component="img"
                            src={foto.image}
                            className="object-cover w-full h-full"
                            alt={curso.text}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {foto.text}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ListadoFotos