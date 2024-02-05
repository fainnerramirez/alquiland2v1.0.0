import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Box, Heading, Container, Text, Button, Stack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png"

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image src={logo} margin={'auto'} width={200} height={200} borderRadius={10}/>
          </Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Upps! <br />
            <Text as={"span"}>
              {error?.status || "404"} {error?.statusText || "Not Found"}
              <br />
              <Text>Esta página no existe</Text>
            </Text>
          </Heading>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/">
              <Button
                colorScheme={"blue"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "blue.400",
                }}
              >
                Volver al inicio
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
