import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Box,
    MenuItem,
    Stack,
    Text,
    Divider,
    FormHelperText,
    Select,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { Toast } from "../utils/Toast";
import { ToastContainer, toast } from "react-toastify"
import { FcGoogle } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";
import { createStudent } from "../firebase/collections/querys/students";
import { errorManagment } from "../firebase/errors/errorManagmentUser";

export const SingInModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [isLoading, setIsLoading] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = React.useState(null);
    const [age, setAge] = useState(null);
    const [facultad, setFacultad] = useState(null);
    const [semestre, setSemestre] = useState(null);

    const handleFormStudent = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const isValid = username && email && age && facultad && semestre;

        if (isValid) {

            let options = {
                username,
                email,
                age,
                facultad,
                semestre,
                savePensions: []
            };

            try {
                let response = createStudent(options)
                    .then((response) => {
                        toast.success("Usuario creado correctamente", {
                            theme: 'colored',
                            position: 'top-center'
                        })

                        setTimeout(() => {
                            window.location.href = "/gallery"
                        }, 2000);
                    })
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                errorManagment(error.code)
            }
        }
        else {

            toast.error("LLena todos los mensajes", {
                theme: 'colored',
                position: 'top-center'
            })

            setIsLoading(false);
        }
    }

    return (
        <>
            <Button width={'full'} borderRadius={35} colorScheme='teal' onClick={onOpen}>Crear cuenta</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                size={'xl'}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={30}>
                        Crea tu cuenta
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Nombre completo</FormLabel>
                                    <Input
                                        type="text"
                                        ref={initialRef}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Correo institucional</FormLabel>
                                    <Input
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FormHelperText>Escribe un correo válido. Te enviaremos un correo electrónico para verificarlo</FormHelperText>
                                </FormControl>
                                <HStack spacing={5} width={'full'}>
                                    <FormControl isRequired>
                                        <FormLabel>Edad</FormLabel>
                                        <Input type="number" onChange={(e) => setAge(e.target.value)} />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Facultad</FormLabel>
                                        <Select icon={<MdArrowDropDown />} onChange={(e) => setFacultad(e.target.value)}>
                                            <option value="" selected>Seleccionar</option>
                                            <option value="ingenieria">Ingeniería</option>
                                            <option value="derecho">Derecho</option>
                                            <option value="ciencias de la salud">Ciencias de la Salud</option>
                                            <option value="ciencias empresariales">Ciencias empresariales</option>
                                            <option value="artes y humanidades">Artes y Humanidades</option>
                                            <option value="comunicaciones">Comunicación</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Semestre</FormLabel>
                                        <Select icon={<MdArrowDropDown />} onChange={(e) => setSemestre(e.target.value)}>
                                            <option value="" selected>seleccionar</option>
                                            <option value="1">Primer semestre</option>
                                            <option value="2">Segundo semestre</option>
                                            <option value="3">Tercer semestre</option>
                                            <option value="4">Cuarto semestre</option>
                                            <option value="5">Quinto semestre</option>
                                            <option value="6">Sexto semestre</option>
                                            <option value="7">Septimo semestre</option>
                                            <option value="8">Octavo semestre</option>
                                            <option value="9">Noveno semestre</option>
                                            <option value="10">Décimo semestre</option>
                                            <option value="Más de 10 semestres">Más de 10 semestres</option>
                                        </Select>
                                    </FormControl>
                                </HStack>
                                <Box align="center" mt="4">
                                    <Button isLoading={isLoading} onClick={handleFormStudent} colorScheme="teal" variant={'outline'} mr={3}>
                                        Crear cuenta
                                    </Button>
                                    <ToastContainer autoClose={false} />
                                </Box>
                            </VStack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
