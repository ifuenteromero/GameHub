import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchItemsResponse } from '../services/api-client';
import endpoints from '../services/endpoints';
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
    useQuery<FetchItemsResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get<FetchItemsResponse<Game>>(endpoints.games, {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.textSearch,
                    },
                })
                .then((res) => res.data),
    });

export default useGames;
