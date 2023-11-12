import React, { useEffect, useState } from 'react'
import { CardPension } from './CardPension'
import Navbar from './Navbar';
import { Box, Heading } from '@chakra-ui/react';
import { getAllAdvertsAnfitrion } from '../firebase/collections/querys/anfitriones';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from "react-router-dom"

const Gallery = () => {

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        const getDocuments = async () => {
            let documents = await getAllAdvertsAnfitrion(10);
            setAnuncios(documents);
            console.log("Documents: ", documents)
        }
        getDocuments();
    }, [])

    useEffect(() => {
        toast.info("Dale clic a cualquiera de las fotos para ver sus detalles", {
            theme: 'colored',
            position: 'top-center'
        })
    }, [])

    return (
        <>
            <Navbar />
            <Heading textAlign={'center'} pt={10} pb={10}>Anuncios publicados</Heading>
            <Box width={"95%"} margin={'auto'} display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'} alignItems={'center'} gap={10}>
                {
                    anuncios.map((anuncio, i) => (
                        <Link to={'/gallery/' + anuncio?.id}>
                            <CardPension anuncio={anuncio} key={anuncio?.id}/>
                        </Link>
                    ))
                }
            </Box>
            <ToastContainer />
        </>
    )
}

export default Gallery;