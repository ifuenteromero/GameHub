import { Progress, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    const { data, error, isLoading, fetchNextPage, hasNextPage } =
        useGames(gameQuery);

    const GAMES_REQUESTED_COUNT = 20;
    const skeletons = generateSequence(GAMES_REQUESTED_COUNT);

    if (error) return <Text>{error.message}</Text>;

    const gamesCount =
        data?.pages.reduce((total, currentPage) => {
            return total + currentPage.results.length;
        }, 0) || 0;

    return (
        <InfiniteScroll
            dataLength={gamesCount}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
                <Progress
                    size="xs"
                    isIndeterminate
                    marginBottom="20px"
                    paddingX="10px"
                />
            }
        >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
                gap={4}
                justifyItems="center"
                padding="10px"
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
        </InfiniteScroll>
    );
};

export default GameGrid;
