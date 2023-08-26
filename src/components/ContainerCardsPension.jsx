﻿import React, { useContext } from "react";
import { CardPension } from "./CardPension";
import { Box, Stack, Flex, Divider, Heading } from "@chakra-ui/react";
import { Services } from "./Services";
import cardContext from "../context/providers/CardContext";
import UserContext from "../context/providers/userContext";

export const ContainerCardsPension = ({ category }) => {
  const dataCard = useContext(cardContext);
  const { data } = useContext(UserContext);

  let dataFilter = dataCard.filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <Flex flexDirection="column">
      <Stack marginBottom={"20px"}>
        <Flex alignItems={"center"} justifyContent={"space-evenly"}>
          <Services />
        </Flex>
        <Divider />
      </Stack>
      {data && data.user != null && (
        <Box p={8} textAlign={"center"}>
          <Heading as='h4' size='md'>
            ¡Hola{" "}
            {data?.user?.user_metadata?.name ||
              data?.user?.email?.split("@")[0]}{" "}
            ! Encuentra tu lugar perfecto para estudiar y vivir.
          </Heading>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        paddingRight={"5%"}
        paddingLeft={"5%"}
        minH="100vh"
      >
        {category.toLowerCase() !== "todas" ? (
          dataFilter.length > 0 ? (
            dataFilter.map((card) => (
              <CardPension
                key={card.id}
                images={card.images}
                location={card.location}
                dateAdd={card.date}
                price={card.price}
                user={card.user}
                category={card.category}
              />
            ))
          ) : (
            <Heading
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              Lista vacía
            </Heading>
          )
        ) : (
          dataCard.map((card) => (
            <CardPension
              key={card.id}
              images={card.images}
              location={card.location}
              dateAdd={card.date}
              price={card.price}
              user={card.user}
              category={card.category}
            />
          ))
        )}
      </Box>
    </Flex>
  );
};