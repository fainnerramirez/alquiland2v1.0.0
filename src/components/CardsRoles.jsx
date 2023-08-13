import React from 'react'
import { Card, Stack, CardBody, Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import {Link as LinkRouter} from "react-router-dom";

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
        <Button variant='solid' colorScheme='pink' size={'md'}  width={"full"} rightIcon={<AiOutlineArrowRight />}>
          <LinkRouter to={link}>
              Soy {role}
          </LinkRouter>
        </Button>
      </CardFooter>
    </Card>
  )
}
