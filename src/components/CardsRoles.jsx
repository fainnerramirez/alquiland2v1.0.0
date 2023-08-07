import React from 'react'
import { Card, Stack, CardBody, Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'

export const CardsRoles = ({role, image, }) => {
  return (
    <Card maxW='sm' ml={"40px"}>
      <CardBody>
        <Image
          src={image}          
          alt='Rol de estudiantes'
          borderRadius='lg'
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='solid' colorScheme='pink' size={'md'}  width={"full"} rightIcon={<AiOutlineArrowRight />}>
              Soy {role}
        </Button>
      </CardFooter>
    </Card>
  )
}
