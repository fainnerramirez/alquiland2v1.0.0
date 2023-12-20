import React, { useState } from "react";
import { Stack, Flex, Divider, Text, Grid, GridItem } from "@chakra-ui/react";
import { CardPension } from "./CardPension";

export const CardsContainer = () => {

  const [cont, setCont] = useState(0);

  return (
    <Stack>
      <Grid templateColumns="repeat(5, 1fr)"
        gap="100">
        <GridItem>
          <CardPension key={cont++} />
        </GridItem>
      </Grid>
      <Divider />
    </Stack>
  );
};
