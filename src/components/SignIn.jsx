import React from "react";
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
} from "@chakra-ui/react";
import { Toast } from "../utils/Toast";
import { ToastContainer } from "react-toastify"

export const SingIn = ({ name }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = React.useState("");
  
  return (
    <>
      <MenuItem as="button" onClick={onOpen}>
        {name}
      </MenuItem>
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
            <form>
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
                <Button type="submit" colorScheme="blue" mr={3}>
                  Enviar Link
                </Button>
                <ToastContainer autoClose={false} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
