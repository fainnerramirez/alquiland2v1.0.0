import React, { useState } from "react"
import { CardsRoles } from "../components/CardsRoles";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Welcome = () => {

    const ImageStudents = "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    const ImageOwner = "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

    const [roles, setRoles] = useState([
        {
            id: 1,
            role: "Estudiante",
            image: ImageStudents,
            link: "/estudiantes"
        },
        {
            id: 2,
            role: "Propietario",
            image: ImageOwner,
            link: "/propietario"
        }
    ]);

    return (
        <Box mb="80px">
            <Box mt="10px">
                <Heading 
                    textAlign={"center"} 
                    color={"pink.500"} 
                    fontSize={{ base: "1.7rem", md: "2rem", lg: "3rem" }}>Unipensiones</Heading>
            </Box>
            <Box mt="10px" display={"flex"} flexDir={{ base: "column", lg: "row" }} alignItems={"center"} justifyContent={"center"} width={"100%"}>
                <Box width={{ base: "100%", lg: "40%" }} >
                    <Text textAlign={"left"} m="30px" noOfLines={{ base: 4, md: 6, lg: 40 }}>
                        <Box mb={"10px"}>
                            ¡Bienvenidos a <Text as="b">Unipensiones!</Text> Somos una plataforma única de alquiler de pensiones estudiantiles diseñada por estudiantes para estudiantes. Entendemos las necesidades y preocupaciones que enfrentas al buscar alojamiento durante tus años académicos, y hemos creado Unipensiones para hacer que ese proceso sea más fácil y cómodo que nunca.
                            Nuestra misión es brindarte opciones de alojamiento estudiantil que se adapten a
                            tus preferencias y presupuesto. En Unipensiones, te conectamos directamente con
                            propietarios de pensiones verificados que ofrecen habitaciones y apartamentos
                            diseñados especialmente para estudiantes.
                        </Box>

                        <Box mb={"10px"}>
                            Nuestro enfoque es garantizar que encuentres un lugar
                            seguro, cómodo y conveniente para vivir mientras te concentras en tus estudios.
                        </Box>

                        <Box mb={"10px"}>
                            Únete a la experiencia Unipensiones y descubre una forma nueva y
                            emocionante de encontrar tu hogar lejos de casa.
                        </Box>
                    </Text>
                </Box>
                <Box
                    mt="10px"
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDir={{ base: "column", md: "row" }}
                    width={{ base: "100%", lg: "60%" }}
                >
                    {
                        roles.map(role => {
                            return <CardsRoles
                                key={role.id}
                                role={role.role}
                                image={role.image}
                                link={role.link}
                            />
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
}