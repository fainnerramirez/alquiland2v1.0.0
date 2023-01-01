import { useContext } from "react";
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
  Heading,
} from "@chakra-ui/react";
import { SingIn } from "./SignIn";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ["Inicio", "Acerca de", "Contacto"];

  const { data } = useContext(UserContext);
  console.log("User navBar: ", data);

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={6}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box bg={"blue.700"} color="white" p={3} borderRadius="10px">
              <Heading as="h1" size="lg">
                alquilan2
              </Heading>
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
                  <Avatar size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }} />
                )}
              </MenuButton>
              {data?.user == null ? (
                <MenuList>
                  <SingIn name="Ingresar" />
                  <MenuItem>Pon tu casa en alquiler</MenuItem>
                  <MenuDivider />
                  <MenuItem>Ayuda</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem>
                    {data.user?.user_metadata?.name || data.user.email}
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button colorScheme={"blue"} onClick={() => handleLogout()}>
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
