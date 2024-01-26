import { Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GridItem from '../LibraryComponents/GridItem';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();

    const { data: game, isLoading, error } = useGame(slug!);
    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <GridItem>
                <Heading>{game.name} </Heading>
                <ExpandableText text={game.description_raw} />
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
