import React from "react";
import { Link, useRouteError } from "react-router-dom";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack
} from '@chakra-ui/react';
import { Services } from "../components/Services";

export const ErrorPage = () => {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                      Opps! <br />
                        <Text as={'span'} color={'green.400'}>
                            Esta página no existe
                        </Text>
                    </Heading>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Link to="/">
                            <Button
                                colorScheme={'green'}
                                bg={'green.400'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Volver al inicio
                            </Button>
                         </Link>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}