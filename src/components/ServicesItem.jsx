import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ServiceItem = ({ name, icon, link }) => {
  return (
    <Box
      as="button"
      minW="8%"
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"md"}
      padding={5}
      _hover={{ bg: "gray.50" }}
    >
      <Link to={link}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text padding={0} size={"sm"}>
            {icon}
          </Text>
          <Text padding={0}>{name}</Text>
        </Box>
      </Link>
    </Box>
  );
};
