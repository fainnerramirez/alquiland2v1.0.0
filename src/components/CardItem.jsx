import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Badge,
  Divider,
  Text,
  Heading,
  Stack,
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
  const image =
    "https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/cc1fd71d-1a91-4026-99f8-c2cbffefd68f.jpeg?im_w=720";
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
      <Card maxW="330px" marginBottom="15px">
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
            src={image}
            alt="Green double couch with wooden legs"
            borderTopRadius="lg"
            minH="320px"
            fallbackSrc="https://via.placeholder.com/420"
          />
          <Divider />
          <Stack mt="1" spacing="3" p="2">
            <Heading size="sm">{location}</Heading>
            <Text size={"sm"} color="gray.500">
              agregado el {dateAdd}
            </Text>
            <Text fontWeight={"extrabold"} fontSize="sm">
              {price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
};
