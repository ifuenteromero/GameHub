import { Image } from '@chakra-ui/image';
import { HStack, List, ListItem } from '@chakra-ui/layout';
import { Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from '../services/genresServices';
import getCroppedImageUrl from '../services/image-url';
import { generateSequence } from '../services/utils';
import GenreSkeleton from './GenreSkeleton';

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();

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
            {data?.results.map((genre) => {
                const isSelected = selectedGenre?.id === genre.id;
                const fontWeight = isSelected ? 'bold' : 'normal';
                return (
                    <ListItem key={genre.id}>
                        <HStack>
                            <Image
                                objectFit="cover"
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => onSelectGenre(genre)}
                                variant="link"
                                fontSize="2xl"
                                fontWeight={fontWeight}
                                whiteSpace="normal"
                                textAlign="left"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                );
            })}
        </>
    );

    return (
        <>
            <Heading fontSize="2xl" marginBottom={4}>
                Genres
            </Heading>
            <List display="flex" flexDir="column" gap={4}>
                {isLoading ? GenreSkeletons : Genres}
            </List>
        </>
    );
};

export default GenreList;
