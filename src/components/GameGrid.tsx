import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

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
                columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
                spacing={10}
                justifyItems="center"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
