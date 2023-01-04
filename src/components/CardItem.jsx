import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Badge,
  CardFooter,
  Divider,
  Text,
  Heading,
  Stack,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";

export const CardItem = ({
  images,
  location,
  dateAdd,
  price,
  user,
  category,
}) => {
  const [selectHeart, SetSelectHeart] = useState(false);

  const handleClickHeart = (e) => {
    SetSelectHeart(!selectHeart);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Card maxW="sm" marginBottom="15px">
        <CardBody padding="0">
          <Box
            as="button"
            position="absolute"
            top="6"
            left="7"
            onClick={(e) => handleClickHeart()}
          >
            {selectHeart ? (
              <AiFillHeart size="35px" color="red" />
            ) : (
              <AiOutlineHeart size="35px" color="white" />
            )}
          </Box>
          <Badge colorScheme="green" position="absolute" top="6" right="7">
            {category}
          </Badge>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            minH="420px"
            fallbackSrc="https://via.placeholder.com/420"
          />
          <Divider />
          <Stack mt="6" spacing="3" p="2">
            <Heading size="md">{location}</Heading>
            <Text>
              fue agregado el {dateAdd} - {user}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
};
