import React from "react";
import { Stack, Flex, Divider, Text } from "@chakra-ui/react";
import { CardPension } from "./CardPension";

export const CardsContainer = () => {
  return (
    <Stack>
      <Flex alignItems={"center"} justifyContent={"space-evenly"}>
        <CardPension />
      </Flex>
      <Divider />
    </Stack>
  );
};
