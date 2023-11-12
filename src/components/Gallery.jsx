import React, { useEffect, useState} from 'react'
import { CardPension } from './CardPension'
import Navbar from './Navbar';
import { Services } from './Services';
import { Heading } from '@chakra-ui/react';
import { getAllAdvertsAnfitrion } from '../firebase/collections/querys/anfitriones';

const Gallery = () => {
    const [anuncios, setAnuncios] = useState([]);
    const array = [1, 2, 3, 4, 5];

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
            <Heading textAlign={'center'}>Anuncios publicados</Heading>
            {
                anuncios.map((anuncio, i) => {
                    return <CardPension key={i} anuncio={anuncio}/>
                })
            }
        </>
    )
}

export default Gallery