import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshot from '../hooks/useScreenshots';

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshot(gameId.toString());

    if (isLoading) return null;
    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} marginTop={4} gap={2}>
            {data?.results.map((file) => (
                <Image key={file.id} src={file.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
