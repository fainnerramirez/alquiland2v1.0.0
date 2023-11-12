import { AbsoluteCenter, Box, Button, Divider, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/logo.png"
import { FcGoogle } from "react-icons/fc";
import { SingInModal } from '../components/SignInModal';
import { GoogleAuthProvider, deleteUser, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../firebase/firestore/database';
import { errorManagment } from '../firebase/errors/errorManagmentUser';

const HomePage = () => {

    const { auth } = useContext(AuthContext);

    const handleClickGooglePopup = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                
                const user = result.user;

                toast.success("Accediendo a tu perfil " + (user.displayName ?? user.email), {
                    theme: "colored",
                    position: "top-center"
                })

                setTimeout(function () {
                    window.location.href = "/gallery";
                }, 2000);

            }).catch((error) => {
                console.log("Error google: ", error.code | error.message)
                errorManagment(error.code);
            });
    }

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
                                leftIcon={<FcGoogle fontSize={25} />}
                                width={'full'}
                                borderRadius={35}
                                colorScheme={'blue'}
                                variant={'outline'}
                                onClick={handleClickGooglePopup}>
                                Regístrate con Google
                            </Button>
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
                            <SingInModal />
                            <Text fontSize={12}>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</Text>
                        </Box>
                    </Box>
                </Box>
                <Box mt={10}>
                    <Text fontWeight={'bold'} fontSize={20}>¿Ya tienes una cuenta?</Text>
                    <Button mt={5} borderRadius={35} width={'50%'} colorScheme='blue' variant={'outline'}>Iniciar sesión</Button>
                </Box>
            </Box>
            <ToastContainer />
        </HStack>
    )
}

export default HomePage