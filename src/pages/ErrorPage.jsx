import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

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
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Opps! <br />
            <Text as={"span"} color={"#EB455F"}>
              {error?.status || "404"} {error?.statusText || "Not Found"}
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
                colorScheme={"green"}
                bg={"#EB455F"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "pink.400",
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
