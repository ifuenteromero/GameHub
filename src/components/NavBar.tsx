import { HStack, Img } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (textSearch: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
    <HStack padding="10px">
        <Img src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
);

export default NavBar;
