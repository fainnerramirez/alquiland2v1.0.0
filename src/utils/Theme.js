import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Lato', sans-serif`,
  },
});

export default theme;
