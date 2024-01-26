import { HStack, Img } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import routes from '../routes';

const NavBar = () => (
    <HStack padding="10px 42px 10px 26px">
        <Link to={routes.root}>
            <Img src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
);

export default NavBar;
