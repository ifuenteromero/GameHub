import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Icon from './Icon';
import { useRef } from 'react';

interface Props {
    onSearch: (textSearch: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

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
