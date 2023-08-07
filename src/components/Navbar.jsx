import { useContext } from "react";
import UserContext from "../context/providers/userContext";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { SingIn } from "./SignIn";
import { supabase } from "../backend/supabase/client";

export default function Navbar() {
  const { isOpen } = useDisclosure();
  const Links = ["Inicio", "Acerca de", "Contacto"];

  const { data } = useContext(UserContext);

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  const image = "https://i.imgur.com/AeUBtNE.gif";

  return (
    <>
      <Box px={6} py={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"}>
            <Box>
              <img
                src={image}
                alt="logo principal alquilapp"
                width={"50px"}
                height={"50px"}
              />
            </Box>
            <Box color="white" p={3} borderRadius="10px">
              <Heading
                as="h1"
                size="md"
                color={"#EB455F"}
                fontWeight={"extrabold"}
              >
                Unipensiones
              </Heading>
            </Box>
          </Box>
          <Flex alignItems={"center"}>
            <Box m={5} fontWeight="extrabold" p={2} borderRadius="10px">
              {data.user == null
                ? "Muestrale a miles de estudiantes tu pensión"
                : data.user?.user_metadata?.name || data.user.email.split("@")[0]}
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {data ? (
                  <Avatar
                    size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    src={data?.user?.user_metadata?.avatar_url}
                  />
                ) : (
                  <Avatar size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }} />
                )}
              </MenuButton>
              {data?.user == null ? (
                <MenuList>
                  <SingIn name="Ingresar" />
                  <MenuItem>
                    <a href={`/new-product`}>Publicar anuncio</a>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Ayuda</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem>
                    <Text>Ver Perfil</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button colorScheme={"blue"} onClick={handleLogout}>
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
                <Text>hola</Text>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Divider colorScheme={"orange"} />
    </>
  );
}
