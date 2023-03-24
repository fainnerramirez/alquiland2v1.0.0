import React from "react";
import { Stack, Flex, Divider } from "@chakra-ui/react";

import { Cards } from "./Cards";

export const CardsContainer = () => {
  return (
    <Stack>
      <Flex alignItems={"center"} justifyContent={"space-evenly"}>
        <Cards category="todas" />
      </Flex>
      <Divider />
    </Stack>
  );
};
