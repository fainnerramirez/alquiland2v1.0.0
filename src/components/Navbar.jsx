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
  Image,
  color
} from "@chakra-ui/react";
import { useContext } from "react"
import { AuthContext } from "../context/authContext";

export default function Navbar() {

  const Links = ["Inicio", "Acerca de", "Contacto"];
  const { isOpen } = useDisclosure();
  const { userAuth, auth } = useContext(AuthContext)

  const handleLogout = async () => {
    console.log("Click")
    await auth.signOut();

    window.location.href = "/";
  }

  console.log("User auth: ", userAuth, auth);

  return (
    <>
      <Box px={6} py={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"}>
            <Box color="white" p={3} borderRadius="10px">
              <Heading
                as="h1"
                size="lg"
                color={"black"}
                fontWeight={"extrabold"}
              >
                Unipensiones
              </Heading>
            </Box>
          </Box>
          <Flex alignItems={"center"}>
            <Box m={5} fontWeight="extrabold" p={2} borderRadius="10px" display={{ base: "none", md: "none", lg: "block" }}>
              {/* {data.user == null
                ? "Una comunidad de estudiantes que comparten el mismo viaje que tú."
                : data.user?.user_metadata?.name || data.user.email.split("@")[0]} */}
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  src={`https://ui-avatars.com/api/?name=${userAuth?.displayName ?? userAuth?.email}&background=0D8ABC&color=fff&size=128`}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Text fontWeight={'bold'}>{userAuth?.displayName ?? userAuth?.email}</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Button colorScheme={"teal"} variant={'outline'} width={'full'} onClick={handleLogout}>
                    cerrar sesión
                  </Button>
                </MenuItem>
              </MenuList>
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
