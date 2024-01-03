import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Icon from './Icon';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
    const { items: platforms, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<Icon iconName="BsChevronDown" />}
            >
                Platforms
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
