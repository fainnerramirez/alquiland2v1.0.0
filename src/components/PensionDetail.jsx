import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getAdvertsAnfitrionByAnuncioId, getAllAdvertsAnfitrion } from '../firebase/collections/querys/anfitriones';
import { Badge, Box, Button, HStack, Heading, Image, List, ListIcon, ListItem, Skeleton, Text } from '@chakra-ui/react';
import { useFormatPrice } from '../custom/Hooks/useFormatPrice';
import { BsBookmarkCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

const PensionDetail = () => {

    const [document, setDocument] = useState(null);
    const [arrayDocuments, setArrayDocuments] = useState([]);
    const { convertPrice } = useFormatPrice();
    const { anuncioId } = useParams()

    useEffect(() => {
        const getDocument = async () => {
            const document = await getAdvertsAnfitrionByAnuncioId(anuncioId);
            setDocument(document);
        }
        getDocument();
    }, [anuncioId])

    useEffect(() => {
        const getDocumentsAll = async () => {
            const getAll = await getAllAdvertsAnfitrion();
            setArrayDocuments(getAll);
        }

        getDocumentsAll();
    }, [anuncioId])

    return (
        <HStack justifyContent={'center'} alignItems={'flex-start'} height={'100vh'}>
            <Box height={'100vh'} mt={100}>
                <Link to={'/gallery'}>
                    <Box mt={5} mb={5}>
                        <Button leftIcon={<IoIosArrowBack />} colorScheme='teal'>Regresar</Button>
                    </Box></Link>
                <Box>
                    {
                        document != null ?
                            <Image src={document?.urlPhoto} borderRadius={'lg'} width={600} height={450} />
                            :
                            <Skeleton width={600} height={450} />
                    }
                </Box>
                <Box>
                    <Text fontSize={20} fontWeight={'bold'} pt={5} pb={5}>Otras pensiones</Text>
                    <HStack spacing={5} >
                        {
                            document != null ?
                                arrayDocuments.splice(0, 3).map((doc, i) => {
                                    return <Link to={'/gallery/' + doc.id}>
                                        <Image src={doc?.urlPhoto} width={150} height={100} borderRadius={'lg'} />
                                    </Link>
                                })
                                :
                                <HStack>
                                    <Skeleton width={150} height={100} />
                                    <Skeleton width={150} height={100} />
                                    <Skeleton width={150} height={100} />
                                </HStack>
                        }
                    </HStack>
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                    document != null ?
                        <Box mt={170} ml={5}>
                            <Heading textTransform={'capitalize'}>{document?.title}</Heading>
                            <Text textTransform={'capitalize'} fontWeight={'bold'}>{document?.city} - {document?.country}</Text>
                            <Text>agregado el {document?.dateCreatedAt}</Text>
                            <Text fontStyle={'italic'}> {document?.direction}</Text>
                            <Text mt={5} mb={5}>{document?.description}</Text>
                            <Text fontWeight={'bold'} fontSize={23}> $ {document?.price} COP mes</Text>
                            <Heading as="h6" size={'md'} mt={5}>Caracteristicas</Heading>
                            <List spacing={3} mt={2}>
                                <ListItem>
                                    <ListIcon as={BsBookmarkCheckFill} color='green.500' />
                                    {document?.typeDomicile}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsBookmarkCheckFill} color='green.500' />
                                    {document?.typeQuota}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsBookmarkCheckFill} color='green.500' />
                                    {document?.typeSpace}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={BsBookmarkCheckFill} color='green.500' />
                                    Barrio {document?.zone}
                                </ListItem>
                            </List>
                            <Heading as="h6" size={'md'} mt={5} mb={2}>Servicios que ofrece</Heading>
                            <HStack width={'30%'}>
                                <Box width={'100%'}>
                                    {
                                        document?.services.map((service, i) => {
                                            return <Badge
                                                m={1}
                                                variant='subtle'
                                                colorScheme='teal'
                                                key={i}
                                                borderRadius={35}
                                                pt={2}
                                                pb={2}
                                                pl={3}
                                                pr={3}>
                                                {service.label}
                                            </Badge>
                                        })
                                    }
                                </Box>
                            </HStack>
                        </Box>
                        :
                        <Skeleton mt={100} width={300} height={500} />
                }
            </Box>
        </HStack >
    )
}

export default PensionDetail