import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../entities';
import routes from '../routes';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

const GameCard = ({
    game: {
        background_image,
        metacritic,
        name,
        parent_platforms,
        rating_top,
        slug,
    },
}: {
    game: Game;
}) => {
    const croppedImageUrl = getCroppedImageUrl(background_image);
    const to = routes.gameDetail(slug);
    const platforms = parent_platforms.map((p) => p.platform);

    return (
        <Link to={to}>
            <Card height="100%">
                <Image src={croppedImageUrl} width="100%" />
                <CardBody>
                    <HStack justifyContent="space-between" marginBottom={3}>
                        <PlatformIconList platforms={platforms} />
                        <CriticScore score={metacritic} />
                    </HStack>

                    <Heading fontSize="2xl">{name}</Heading>

                    <Emoji rating={rating_top} />
                </CardBody>
            </Card>
        </Link>
    );
};

export default GameCard;
