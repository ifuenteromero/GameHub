import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const GAMES_REQUESTED_COUNT = 20;
    const skeletons = Array.from(
        { length: GAMES_REQUESTED_COUNT },
        (_, index) => index + 1
    );

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                padding="10px"
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={10}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
