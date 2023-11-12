import { AbsoluteCenter, Box, Button, Divider, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/logo.png"
import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
    return (
        <HStack spacing={10} justifyContent={'space-between'} height={'100%'}>
            <Box width={'50%'} display={'flex'} justifyContent={'center'}>
                <Image src={Logo} />
            </Box>
            <Box width={'50%'}>
                <Heading as='h1' size='2xl'>
                    Una comunidad de estudiantes <br /> que comparten el mismo viaje que tú.
                </Heading>
                <Box width={'50%'}>
                    <Text mt={5} textAlign={'left'} fontSize={35}>Únete hoy</Text>
                    <Box mt={10}>
                        <Box>
                            <Button 
                                leftIcon={<FcGoogle fontSize={25}/>} 
                                width={'full'} 
                                borderRadius={35} 
                                colorScheme={'blue'} 
                                variant={'outline'}>Regístrate con Google</Button>
                        </Box>
                        <Box>
                            <Box position='relative' padding='10'>
                                <Divider />
                                <AbsoluteCenter bg='white' px='4'>
                                    o
                                </AbsoluteCenter>
                            </Box>
                        </Box>
                        <Box>
                            <Button width={'full'} borderRadius={35} colorScheme='teal'>Crear cuenta</Button>
                            <Text fontSize={12}>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </HStack>
    )
}

export default HomePage