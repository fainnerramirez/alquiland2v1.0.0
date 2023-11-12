import React, { useContext } from "react";
import { Box, Stack, Flex, Divider, Heading } from "@chakra-ui/react";
import { Services } from "./Services";

export const ContainerPensions = () => {
  return (
    <Flex flexDirection="column">
      <Stack marginBottom={"20px"}>
        <Flex alignItems={"center"} justifyContent={"space-evenly"}>
          <Services />
        </Flex>
        <Divider />
      </Stack>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        paddingRight={"5%"}
        paddingLeft={"5%"}
        minH="100vh"
      >
      </Box>
    </Flex>
  );
};
