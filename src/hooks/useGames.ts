import endpoints from '../services/endpoints';
import useFetchData from './useFetchData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) =>
    useFetchData<Game>(
        endpoints.games,
        [selectedGenre?.id, selectedPlatform?.id],
        {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectedPlatform?.id,
            },
        }
    );

export default useGames;
