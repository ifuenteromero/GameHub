import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Icon from './Icon';

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<Icon iconName="BsSearch" />} />
            <Input
                borderRadius={20}
                placeholder="Search games..."
                variant="filled"
            />
        </InputGroup>
    );
};

export default SearchInput;
