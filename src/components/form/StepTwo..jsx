import React, { useState } from "react";

import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Select,
  Box,
  Text,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";

export const StepTwo = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Fotos del anuncio
      </Heading>
      <Heading as="h4" size="md">
        La imagen debe ser de 300x300 pixeles y no pesar mas de 1MB para mejor
        calidad
      </Heading>
      <HStack spacing={"10px"}>
        <Input
          id="image"
          type="file"
          pt={"10px"}
          pb={"10px"}
          border={"none"}
          onChange={onImageChange}
        />

        {image && (
          <Image
            src={image}
            alt="image user"
            height={"150px"}
            width={"150px"}
            borderRadius={"35px"}
          />
        )}
      </HStack>
    </>
  );
};
