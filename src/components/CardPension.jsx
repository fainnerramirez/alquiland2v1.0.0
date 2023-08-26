import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ImagePension from "../assets/pension.png";

export const CardPension = ({
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
      <Card border={'none'} boxShadow={'none'}>
        <CardBody padding="10px">
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
              <AiOutlineHeart size="35px" color="white"/>
            )}
          </Box>
          <Badge colorScheme="green" position="absolute" top="6" right="7">
            {category}
          </Badge>
          <Image
            src={ImagePension}
            alt="Green double couch with wooden legs"
            borderTopRadius="lg"
            maxH={"300px"}
            maxW={"300px"}
            fallbackSrc="https://via.placeholder.com/420"
            borderRadius={'lg'}
          />
          <Stack mt="1" spacing="3" p="2">
            <Heading size="sm">{location}</Heading>
            <Text size={"sm"} color="gray.500">
              agregado el {dateAdd}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
};
