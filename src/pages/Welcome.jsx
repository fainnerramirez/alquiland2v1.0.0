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
            image: ImageStudents
        },
        {
            id: 2,
            role: "Propietario",
            image: ImageOwner
        }
    ]);

    return (
        <Box mb="100px">
            <Box mt="10px">
                <Heading textAlign={"center"} color={"pink.600"} fontSize={{base:"1.7rem", md: "2rem", lg: "3rem"}}>Unipensiones</Heading>
                <Heading  mt="10px" textAlign={"center"} fontSize={{base: "1rem", md: "1.5rem", lg: "1.8rem"}}>¿Cuál es tu Rol?</Heading>
            </Box>
            <Box 
                mt="10px" 
                display={'flex'} 
                alignItems={'center'} 
                justifyContent={'center'} 
                flexWrap={"wrap"} 
                >
                {
                    roles.map(role => {
                        return <CardsRoles
                            key={role.id}
                            role={role.role}
                            image={role.image}
                        />
                    })
                }
            </Box>
        </Box>
    );
}