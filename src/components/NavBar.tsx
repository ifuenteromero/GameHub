import { HStack, Img } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => (
    <HStack padding="10px 42px 10px 26px">
        <Img src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
);

export default NavBar;
