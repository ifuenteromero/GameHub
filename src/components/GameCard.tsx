import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../services/gamesService';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

const GameCard = ({ game }: { game: Game }) => {
    const croppedImageUrl = getCroppedImageUrl(game.background_image);
    return (
        <Card height="100%">
            <Image src={croppedImageUrl} width="100%" />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
