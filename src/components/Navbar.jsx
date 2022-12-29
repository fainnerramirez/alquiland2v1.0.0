import { ReactNode, useContext } from "react";
import "@fontsource/pacifico";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { SingUp } from "./SignUp";
import { SingIn } from "./SignIn";
import * as COLORS from "../utils/Colors";
import UserContext from "../context/providers/userContext";
import { supabase } from "../backend/supabase/client";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const Logo = "https://i.imgur.com/7f2oIn8.png";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ["Inicio", "Acerca de", "Contacto"];

  const { data } = useContext(UserContext);
  console.log("User navBar: ", data);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={6}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box bg={"blue.700"} color="white" p={5} borderRadius="10px">
              <Heading>alquilan2</Heading>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Box m={5} bg={"blue.700"} color="white" p={2} borderRadius="10px">
              {data.user == null
                ? "Pon tu casa en Alquilan2 "
                : data.user?.user_metadata?.name || data.user.email}
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {data?.user?.user_metadata ? (
                  <Avatar
                    size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
                    src={data?.user?.user_metadata?.avatar_url}
                  />
                ) : (
                  <Avatar
                    size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                )}
              </MenuButton>
              {data?.user == null ? (
                <MenuList>
                  <SingUp name="Registrate" />
                  <SingIn name="Iniciar sesión" />
                  <MenuItem>Pon tu casa en alquiler</MenuItem>
                  <MenuDivider />
                  <MenuItem>Ayuda</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem> {data.user?.user_metadata?.name}</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button
                      colorScheme={"blue"}
                      onClick={() => supabase.auth.signOut()}
                    >
                      Salir
                    </Button>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
