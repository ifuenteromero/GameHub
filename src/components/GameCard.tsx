import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

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
            </CardBody>
        </Card>
    );
};

export default GameCard;
