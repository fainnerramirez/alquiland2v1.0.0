import React from "react";

import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Textarea,
  Divider,
} from "@chakra-ui/react";

export const StepOne = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Publicación de anuncio
      </Heading>

      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
          Titulo del anuncio
        </FormLabel>
        <Input
          id="first-name"
          placeholder="Ejemplo: Casa amoblada, Pension para estudiantes, etc."
        />
      </FormControl>

      <HStack spacing={"10px"} mb="2%">
        <FormControl mt="1%">
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Correo
          </FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>
            A través de este correo se contactaran contigo.
          </FormHelperText>
        </FormControl>
        <FormControl mt="1%">
          <FormLabel htmlFor="telefono" fontWeight={"normal"}>
            Teléfono
          </FormLabel>
          <Input
            id="telefono"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <FormHelperText>
            A través de este teléfono se contactaran contigo.
          </FormHelperText>
        </FormControl>
      </HStack>
      <Divider />
      <Divider />
      <HStack spacing={"10px"} mt="1%">
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Ciudad
          </FormLabel>
          <Input id="last-name" placeholder="Ciudad" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Barrio
          </FormLabel>
          <Input id="last-name" placeholder="Barrio" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Dirección
          </FormLabel>
          <Input id="last-name" placeholder="Dirección" />
        </FormControl>
      </HStack>

      <FormControl mt="1%">
        <FormLabel htmlFor="descripcion" fontWeight={"normal"}>
          Descripción
        </FormLabel>
        <Textarea
          id="descripcion"
          placeholder="Ejemplo: Local de medidas de 12x10 apto para tiendas, almacenes para ropa, etc."
        ></Textarea>
      </FormControl>
    </>
  );
};
