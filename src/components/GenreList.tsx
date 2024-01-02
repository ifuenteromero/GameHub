import { HStack, List, ListItem, Text } from '@chakra-ui/layout';
import useGenres from '../hooks/useGenres';
import { Image } from '@chakra-ui/image';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { items: genres, error } = useGenres();
    return (
        <>
            {error && <p>{error}</p>}
            <List display="flex" flexDir="column" gap={4}>
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
            </List>
        </>
    );
};

export default GenreList;
