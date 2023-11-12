import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SkeletonCircle,
  Stack,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../context/authContext";

export const CardPension = ({
  anuncio
}) => {
  const image = "https://i.pinimg.com/236x/9f/aa/42/9faa4266f1a6eb1790622d745cec62ba.jpg";
  const [selectHeart, SetSelectHeart] = useState(false);
  const { userAuth } = useContext(AuthContext);

  const handleClickHeart = (e) => {
    SetSelectHeart(!selectHeart);
  };

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
    >
      <Card border={'none'} boxShadow={'none'}>
        <CardBody padding="10px">
          <Box
            as="button"
            position="absolute"
            top="6"
            left="340"
            onClick={(e) => handleClickHeart()}
          >
            {selectHeart ? (
              <AiFillHeart size="35px" color="red" />
            ) : (
              <AiOutlineHeart size="35px" color="white" />
            )}
          </Box>
          <Box as={'button'} onClick={handleImageDetails}>
            <Image
              src={anuncio.urlPhoto}
              alt={anuncio.username ?? "usuario"}
              borderTopRadius="lg"
              height={"300px"}
              width={"380px"}
              fallbackSrc="https://via.placeholder.com/420"
              borderRadius={'lg'}
            />
          </Box>
          {
            userAuth ?
              <HStack spacing={5} mt={2}>
                <Image boxSize='50px'
                  objectFit='cover'
                  alt={userAuth?.displayName} src={userAuth?.photoURL} borderRadius={'50%'} />
                <Box>
                  <Text fontWeight={'bold'} textTransform={'capitalize'}>{userAuth?.displayName}</Text>
                  <Text textTransform={'capitalize'}>{anuncio.city}, {anuncio.country}</Text>
                </Box>
              </HStack>
              :
              <SkeletonCircle size='10' />
          }
          {/* <Box>
            {
              anuncio?.services.map((service, index) => (
                <Badge
                  variant='subtle'
                  colorScheme='teal'
                  key={index}
                  borderRadius={35}
                  pt={2}
                  pb={2}
                  pl={3}
                  pr={3}>
                  {service.label}
                </Badge>
              ))
            }
          </Box> */}
        </CardBody>
      </Card>
    </motion.div>
  );
};
