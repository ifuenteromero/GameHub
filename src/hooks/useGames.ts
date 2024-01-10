import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchItemsResponse } from '../services/api-client';
import gamesService, { Game } from '../services/gamesService';

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchItemsResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            gamesService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.textSearch,
                },
            }),
    });

export default useGames;
