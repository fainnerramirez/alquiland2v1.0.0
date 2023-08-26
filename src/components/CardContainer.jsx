import React from "react";
import { Stack, Flex, Divider } from "@chakra-ui/react";

import { ContainerCardsPension } from "./ContainerCardsPension";

export const CardsContainer = () => {
  return (
    <Stack>
      <Flex alignItems={"center"} justifyContent={"space-evenly"}>
        <ContainerCardsPension category="todas" />
      </Flex>
      <Divider />
    </Stack>
  );
};
