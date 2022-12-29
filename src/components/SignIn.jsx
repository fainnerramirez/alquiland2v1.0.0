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
  ModalFooter,
  useDisclosure,
  Box,
  MenuItem,
  InputRightElement,
  InputGroup,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { supabase } from "../backend/supabase/client";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export const SingIn = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //====== config backend ======
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
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      alert("Logged in Google successfully!");
    } catch (error) {
      //alert(error.error_description || error.message);
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
            ¡Te damos la bienvenida a alquilan2! - ingresar
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
                <Button colorScheme="blue" mr={3} type="submit">
                  Continuar
                </Button>
              </Box>
              <Divider p="2" />
              <Text align="center" p="3">
                ó continua con
              </Text>
              <Stack mt="5">
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  providers={["google"]}
                />
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
