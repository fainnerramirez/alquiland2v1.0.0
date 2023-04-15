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
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../backend/supabase/client";

export const SingIn = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = React.useState("");

  const handleLinkMagicLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      if (error) throw error;
      alert("Logged in successfully!");
    } catch (error) {
      alert(error.error_description || error.message);
      console.error(error);
    }
  };

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
            ¡Bienvenid@ a UniPensiones!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleLinkMagicLogin}>
              <FormControl>
                <FormLabel>Correo</FormLabel>
                <Input
                  type="email"
                  ref={initialRef}
                  placeholder="tucorreo@sitio.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Box align="center" mt="4">
                <Button type="submit" colorScheme="blue" mr={3}>
                  Enviar Código
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
