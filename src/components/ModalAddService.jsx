//ModalAddService
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
  InputRightElement,
  InputGroup,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const ModalAddService = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
            ¡Ingresa tu sevicio a alquilan2!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre del servicio</FormLabel>
              <Input
                type="text"
                ref={initialRef}
                placeholder="Ej: casa de 2 cuartos y 1 baño"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ubicación</FormLabel>
              <Input type="text" placeholder="Barrio" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? (
                      <AiOutlineEye size="20px" />
                    ) : (
                      <AiOutlineEyeInvisible size="20px" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box align="center" mt="4">
              <Button colorScheme="blue" mr={3}>
                Continuar
              </Button>
            </Box>
            <Divider p="2" />
            <Text align="center" p="3">
              ó continua con
            </Text>
            <Stack mt="5">
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Continua con Facebook
              </Button>
              <Button
                colorScheme="blue"
                color="black"
                variant="outline"
                leftIcon={<FcGoogle />}
              >
                Continua con Google
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
