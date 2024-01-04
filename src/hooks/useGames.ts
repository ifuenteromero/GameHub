import { GameQuery } from '../App';
import endpoints from '../services/endpoints';
import useFetchData from './useFetchData';
import { Platform } from './usePlatforms';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
    useFetchData<Game>(endpoints.games, [gameQuery], {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.textSearch,
        },
    });

export default useGames;
