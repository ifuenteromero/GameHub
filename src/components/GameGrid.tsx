import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import { generateSequence } from '../services/utils';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGames(gameQuery);

    const GAMES_REQUESTED_COUNT = 20;
    const skeletons = generateSequence(GAMES_REQUESTED_COUNT);

    if (error) return <Text>{error.message}</Text>;

    return (
        <Box padding="10px">
            <SimpleGrid
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
                {data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button onClick={() => fetchNextPage()} marginTop={5}>
                    {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </Button>
            )}
        </Box>
    );
};

export default GameGrid;
