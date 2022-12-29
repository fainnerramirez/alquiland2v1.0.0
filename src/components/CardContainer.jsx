import { Stack, Flex, Divider } from "@chakra-ui/react";
import React from "react";

import { Cards } from "./Cards";

export const CardsContainer = () => {
    return (
        <>
            <Stack p={5} spacing={5}>
                <Flex alignItems={'center'} justifyContent={'space-around'}>
                    <Cards category="todas" />
                </Flex>
                <Divider />
            </Stack>
        </>
    );
}