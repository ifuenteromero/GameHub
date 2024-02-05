import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import useGameQueryStore from '../hooks/useGameQueryStore';
import routes from '../routes';
import { debounce } from '../services/utils';
import Icon from './Icon';

const SearchInput = () => {
    const onSearch = useGameQueryStore((s) => s.setSearchText);
    const navigate = useNavigate();
    const location = useLocation();

    const debouncedSearch = debounce((searchText: string) => {
        onSearch(searchText);
    }, 1000);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        debouncedSearch(inputValue);
        if (location.pathname !== routes.root) navigate(routes.root);
    };

    return (
        <InputGroup>
            <InputLeftElement children={<Icon iconName="BsSearch" />} />
            <Input
                borderRadius={20}
                placeholder="Search games..."
                variant="filled"
                onChange={handleInputChange}
            />
        </InputGroup>
    );
};

export default SearchInput;
