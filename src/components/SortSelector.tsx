import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Icon from './Icon';

const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<Icon iconName="BsChevronDown" />}
            >
                Order by: Relevance
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
