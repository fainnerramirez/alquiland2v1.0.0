import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getAdvertsAnfitrionByAnuncioId } from '../firebase/collections/querys/anfitriones';
import { Box, HStack, Heading, Image } from '@chakra-ui/react';

const PensionDetail = () => {
    const [document, setDocument] = useState(null);
    const { anuncioId } = useParams()
    console.log("Paso 1")
    console.log("Parametro anuncio Id: ", anuncioId);

    useEffect(() => {
        console.log("Paso 2: ")
        console.log("Montado cambio: ")
        const getDocument = async () => {
            console.log("Anuncio Id 123456789: ", anuncioId);
            const document = await getAdvertsAnfitrionByAnuncioId(anuncioId);
            console.log("Docuent details: ", document);
            setDocument(document);
        }
        getDocument();
        console.log("Paso 3")
        return () => {
            console.log("Paso 4")
            setDocument(null);
            console.log("DesMontado: ")
        }
    }, [anuncioId])

    return (
        <HStack>
            <Box>
                {
                    document != null &&
                    <Image src={document?.urlPhoto} />
                }
            </Box>
            <Box>
                {
                    document != null && <Heading>{document?.title}</Heading>
                }
            </Box>
        </HStack>
    )
}

export default PensionDetail