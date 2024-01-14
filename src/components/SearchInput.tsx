import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import useGameQueryStore from '../hooks/useGameQueryStore';
import Icon from './Icon';

const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSearch = useGameQueryStore((s) => s.setSearchText);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
    };

    return (
        <form className="search-input__container" onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<Icon iconName="BsSearch" />} />
                <Input
                    ref={inputRef}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
