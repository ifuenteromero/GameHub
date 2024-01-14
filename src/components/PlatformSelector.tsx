import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useGameQueryStore from '../hooks/useGameQueryStore';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import Icon from './Icon';

const PlatformSelector = () => {
    const { data } = usePlatforms();

    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(selectedPlatformId);

    const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<Icon iconName="BsChevronDown" />}
            >
                {platform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform.id)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
