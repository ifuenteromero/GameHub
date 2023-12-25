import { HStack, Img, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => (
    <HStack>
        <Img src={logo} boxSize="60px" />
        <Text>Nav Bar</Text>
    </HStack>
);

export default NavBar;
