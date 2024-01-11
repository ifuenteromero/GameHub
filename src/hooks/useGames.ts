import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchItemsResponse } from '../services/api-client';
import gamesService, { Game } from '../services/gamesService';

const GAME_SEARCH_PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchItemsResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            gamesService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.textSearch,
                    page: pageParam,
                    page_size: GAME_SEARCH_PAGE_SIZE,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            const hasMore = !!lastPage.next;
            const currentPage = allPages.length;
            return hasMore ? currentPage + 1 : undefined;
        },
        refetchOnWindowFocus: false,
    });

export default useGames;
