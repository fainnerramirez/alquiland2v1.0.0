import React from "react";
import { Box, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ServiceItem = ({name, icon, link}) => {
    return (
            <Card as="button"
                minW='10%'
                display="flex"
                alignItems={'center'}
                justifyContent={'center'}
                _hover={{ bg: "gray.100" }}
                >
                <Link to={link}>
                    <Box display="flex"
                        flexDirection="column"
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <CardBody>
                            {icon}
                        </CardBody>
                        <CardFooter>
                            {name}
                        </CardFooter>
                    </Box>
                </Link>
            </Card>
    );
}