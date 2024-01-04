import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Icon from './Icon';

interface Props {
    sortOrder: string;
    onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder = '', onSelectSortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

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
