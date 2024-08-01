import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "dark" ? "light" : "dark"}
      </Button>
    </HStack>
  );
};

export default NavBar;
