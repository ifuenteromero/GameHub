import { HStack, List, ListItem, Text } from '@chakra-ui/layout';
import useGenres from '../hooks/useGenres';
import { Image } from '@chakra-ui/image';
import getCroppedImageUrl from '../services/image-url';
import { generateSequence } from '../services/utils';
import GenreSkeleton from './GenreSkeleton';

const GenreList = () => {
    const { items: genres, error, isLoading } = useGenres();

    if (error) return null;

        const GENRE_SKELETON_COUNT = 20;
        const skeletons = generateSequence(GENRE_SKELETON_COUNT);
    const GenreSkeletons = (
            <>
                {skeletons.map((sk) => (
                    <ListItem key={sk}>
                        <GenreSkeleton />
                    </ListItem>
                ))}
                ;
            </>
        );

    const Genres = (
            <>
                {genres.map((genre) => (
                    <ListItem key={genre.id}>
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text fontSize="2xl">{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </>
        );

    return (
        <List display="flex" flexDir="column" gap={4}>
            {isLoading ? GenreSkeletons : Genres}
        </List>
    );
};

export default GenreList;
