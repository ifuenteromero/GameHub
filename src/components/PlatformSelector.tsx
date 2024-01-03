import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Icon from './Icon';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { items: platforms, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<Icon iconName="BsChevronDown" />}
            >
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
