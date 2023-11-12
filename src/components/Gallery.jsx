import React, { useEffect, useState } from 'react'
import { CardPension } from './CardPension'
import Navbar from './Navbar';
import { Services } from './Services';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { getAllAdvertsAnfitrion } from '../firebase/collections/querys/anfitriones';

const Gallery = () => {

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        const getDocuments = async () => {
            let documents = await getAllAdvertsAnfitrion(10);
            console.log("Documents query: ", document);
            setAnuncios(documents);
        }
        getDocuments();

    }, [])

    return (
        <>
            <Navbar />
            <Heading textAlign={'center'} pt={10} pb={10}>Anuncios publicados</Heading>
            <HStack width={"90%"} margin={'auto'} spacing={10} flexWrap={'wrap'}>
                {
                    anuncios.map((anuncio, i) => {
                        return <CardPension key={i} anuncio={anuncio} />
                    })
                }
            </HStack>
        </>
    )
}

export default Gallery;