import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  SkeletonCircle,
  Tag,
  TagLabel,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../context/authContext";
import { useFormatPrice } from "../custom/Hooks/useFormatPrice";
import moment from "moment";
moment.locale('es');

export const CardPension = ({
  anuncio
}) => {

  const [selectHeart, SetSelectHeart] = useState(false);
  const { userAuth } = useContext(AuthContext);
  const { convertPrice } = useFormatPrice();

  const handleImageDetails = () => {
    console.log("Click!: ", anuncio);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      as={'button'}
      onClick={handleImageDetails}
      style={{ cursor: 'pointer' }}
    >
      <Card border={'none'} boxShadow={'none'} maxW='sm'>
        <CardBody padding="10px">
          <Box>
            <Image
              src={anuncio.urlPhoto}
              alt={anuncio.username}
              borderTopRadius="lg"
              height={{ base: '150px', md: "300px" }}
              width={{ base: '180px', md: "380px" }}
              fallbackSrc="https://via.placeholder.com/420"
              borderRadius={'lg'}
            />
          </Box>
          {
            userAuth ?
              <Tag
                variant='solid'
                position="absolute"
                top="6"
                left="7"
                size='lg'
                colorScheme="blue"
                // bgGradient='linear(to-l, #87C4FF, #0174BE)'
                borderRadius='full'
                width={'50%'}
                display={{ base: 'none', md: 'block' }}>
                <Avatar
                  src={anuncio.userPhoto}
                  size='xs'
                  name={anuncio.username}
                  ml={-1}
                  mr={2}
                />
                <TagLabel fontWeight={'bold'}>{anuncio.username}</TagLabel>
              </Tag>
              :
              <SkeletonCircle size='10' />
          }
          <Box>
            <Text display={{ base: 'none', md: 'block' }} textTransform={'capitalize'} fontWeight={'bold'}>{anuncio?.city}, {anuncio?.country}</Text>
            <Text display={{ base: 'none', md: 'block' }}> agregado el {moment(anuncio.dateCreatedAt, 'DD/MM/YYYY').format('ll')}</Text>
          </Box>
          <Box width={'full'} mt={1}>
            <Tag
              bg={'transparent'}
              size='md'
              colorScheme="blue"
              borderRadius='full'
            >
              <Avatar
                src={anuncio.userPhoto}
                size='xs'
                name={anuncio.username}
                ml={-1}
                mr={2}
              />
              <TagLabel fontWeight={'bold'}>{anuncio.username}</TagLabel>
            </Tag>
          </Box>
        </CardBody>
        <CardFooter p={0}>
          <Text display={{ base: 'none', md: 'block' }} ml={2} fontWeight={'bold'}>$ {convertPrice(anuncio?.price)} COP<span style={{ fontWeight: 'normal' }}> mes</span></Text>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
