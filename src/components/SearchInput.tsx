import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Icon from './Icon';

const SearchInput = () => {
    return (
        <form className="search-input__container">
        <InputGroup>
            <InputLeftElement children={<Icon iconName="BsSearch" />} />
            <Input
                borderRadius={20}
                placeholder="Search games..."
                variant="filled"
            />
        </InputGroup>
        </form>
    );
};

export default SearchInput;
