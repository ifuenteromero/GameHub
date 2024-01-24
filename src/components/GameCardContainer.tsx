import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    const transition = 'transform 0.15s ease-in';
    return (
        <Box
            width="100%"
            borderRadius={10}
            overflow="hidden"
            transition={transition}
            _hover={{
                transform: 'scale(1.03)',
                transition,
            }}
        >
            {children}
        </Box>
    );
};

export default GameCardContainer;
