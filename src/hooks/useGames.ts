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
}

const useGames = (gameQuery: GameQuery) =>
    useFetchData<Game>(endpoints.games, [gameQuery], {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
        },
    });

export default useGames;
