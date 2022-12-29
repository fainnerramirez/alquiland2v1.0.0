import React, { useContext } from "react";
import { CardItem } from "./CardItem";
import { Box, Stack, Flex, Divider, Heading } from "@chakra-ui/react";
import { Services } from "./Services";
import cardContext from "../context/providers/CardContext";

export const Cards = ({ category }) => {
  const dataCard = useContext(cardContext);

  let dataFilter = dataCard.filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <Flex flexDirection="column">
      <Stack p={5} spacing={5}>
        <Flex alignItems={"center"} justifyContent={"space-around"}>
          <Services />
        </Flex>
        <Divider />
      </Stack>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {category !== "todas" ? (
          dataFilter.length > 0 ? (
            dataFilter.map((card) => (
              <CardItem
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
            <Heading height="100vh">
              No hay elementos en la lista {category}
            </Heading>
          )
        ) : (
          dataCard.map((card) => (
            <CardItem
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
