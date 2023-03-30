import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/joystick.png";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
}

export default NavBar;
