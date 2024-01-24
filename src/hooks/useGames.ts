import { useInfiniteQuery } from '@tanstack/react-query';
import { Game } from '../entities';
import { FetchItemsResponse } from '../services/api-client';
import gamesService from '../services/gamesService';
import useGameQueryStore from './useGameQueryStore';

const GAME_SEARCH_PAGE_SIZE = 20;

const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    return useInfiniteQuery<FetchItemsResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            gamesService.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
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
};

export default useGames;
