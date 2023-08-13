import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";
import "@fontsource/montserrat";
import "@fontsource-variable/nunito"
import "@fontsource/ubuntu"

const theme = extendTheme({
  fonts: {
    //heading: `'Montserrat', sans-serif`,
    heading: `'Nunito Variable', sans-serif;`,
    body: `'Ubuntu', sans-serif`,
  },
});

export default theme;
