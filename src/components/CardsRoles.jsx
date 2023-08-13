import React from 'react'
import { 
  Card, 
  Stack, 
  CardBody, 
  Heading, 
  Text, 
  Image, 
  Divider, 
  CardFooter, 
  Button, 
  ButtonGroup, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import {Link as LinkRouter} from "react-router-dom";

const StudentsButtonModal = ({role}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button 
         variant='solid' 
         colorScheme='pink' 
         size={'md'}  
         width={"full"} 
         rightIcon={<AiOutlineArrowRight />}
        onClick={onOpen}
      >
        Soy  {role}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laudantium!
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const CardsRoles = ({role, image, link}) => {

  return (
    <Card maxW='sm' m="10px">
      <CardBody>
        <Image
          src={image}          
          alt={role}
          width={"400px"}
          height={"200px"}
          borderRadius='lg'
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <StudentsButtonModal role={role} />
      </CardFooter>
    </Card>
  )
}