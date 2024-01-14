import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useGameQueryStore from '../hooks/useGameQueryStore';
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

    const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder) || '';
    const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);

    const currentSortOrder = sortOrders.find(
        (order) => order.value === sortOrder
    );

    const selectorLabel = `Order by: ${currentSortOrder?.label}`;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<Icon iconName="BsChevronDown" />}
            >
                {selectorLabel}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
