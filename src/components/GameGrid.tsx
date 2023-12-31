import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { generateSequence } from '../services/utils';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { items: games, error, isLoading } = useGames(gameQuery);
    const GAMES_REQUESTED_COUNT = 20;
    const skeletons = generateSequence(GAMES_REQUESTED_COUNT);

    if (error) return <Text>{error}</Text>;

    return (
        <SimpleGrid
            padding="10px"
            columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
            gap={4}
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
    );
};

export default GameGrid;
