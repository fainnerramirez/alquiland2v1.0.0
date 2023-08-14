import React from 'react'
import { 
  Card, 
  Stack, 
  CardBody, 
  Heading, 
  Text, 
  Image, 
  Divider, 
  CardFooter, 
  Button, 
  ButtonGroup, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box
} from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { supabase } from "../backend/supabase/client";
import { Toast } from '../utils/Toast';

const StudentsButtonModal = ({role}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = React.useState("");

  const handleLinkMagicLogin = async (e) => {
    
    e.preventDefault();

    try {

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:3000/estudiantes"
        }
      });

      if (error) throw error;

      Toast("success", "Link enviado correctamente!");
    } catch (error) {
      Toast("error", error.error_description || error.message);
    }
  };

  return (
    <>
      <Button 
         variant='solid' 
         colorScheme='pink' 
         size={'md'}  
         width={"full"} 
         rightIcon={<AiOutlineArrowRight />}
         onClick={onOpen}
      >
        Soy  {role}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            ¡Bienvenid@  a <Text color={"pink.500"}>UniPensiones!</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleLinkMagicLogin}>
              <FormControl>
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                  type="email"
                  ref={initialRef}
                  placeholder="tucorreo@sitio.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText>Escribe un correo válido para que puedas recibir el link de registro.</FormHelperText>
              </FormControl>
              <Box align="center" mt="4">
                <Button type="submit" colorScheme="pink" mr={3}>
                  Enviar Link
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const CardsRoles = ({role, image, link}) => {

  return (
    <Card maxW='sm' m="10px">
      <CardBody>
        <Image
          src={image}          
          alt={role}
          width={"400px"}
          height={"200px"}
          borderRadius='lg'
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <StudentsButtonModal role={role} />
      </CardFooter>
    </Card>
  )
}