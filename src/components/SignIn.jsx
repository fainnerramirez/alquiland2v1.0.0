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

  const handleLogin = async (e) => {
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

  const handleLoginGoogle = async (e) => {
    e.preventDefault();
    try {
      console.log("click en google");
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
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
            ¡Te damos la bienvenida a alquilan2!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleLogin}>
              <FormControl>
                <FormLabel>Correo existente</FormLabel>
                <Input
                  type="email"
                  ref={initialRef}
                  placeholder="tucorreo@sitio.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Box align="center" mt="4">
                <Button type="submit" colorScheme="blue" mr={3}>
                  Continuar
                </Button>
              </Box>
              <Divider p="2" />
              <Text align="center" p="3">
                ó
              </Text>
              <Stack mt="5">
                <Button
                  colorScheme="blue"
                  color="black"
                  variant="outline"
                  leftIcon={<FcGoogle />}
                  onClick={handleLoginGoogle}
                >
                  Continua con Google
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
