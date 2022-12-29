import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailCard = ({ location, username, price }) => {
  const { id } = useParams();

  return (
    <Box>
      <Text>Id: {id}</Text>
      <Text>Location: {location}</Text>
      <Text>username: {username}</Text>
      <Text>price: {price}</Text>
    </Box>
  );
};
