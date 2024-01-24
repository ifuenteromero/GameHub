import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    text: string;
    maxCharacters?: number;
}

const ExpandableText = ({ text, maxCharacters = 500 }: Props) => {
    if (text.length <= maxCharacters) return <Text>{text}</Text>;

    const [isCollapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => setCollapsed((prevState) => !prevState);

    const buttonText = isCollapsed ? 'Read more' : 'Show less';

    const visibleText = isCollapsed
        ? `${text.substring(0, maxCharacters)}...`
        : text;

    return (
        <>
            <Text display="inline">{visibleText}</Text>
            <Button
                onClick={toggleCollapsed}
                marginLeft={2}
                colorScheme="yellow"
                size="xs"
                fontWeight="bold"
            >
                {buttonText}
            </Button>
        </>
    );
};

export default ExpandableText;
