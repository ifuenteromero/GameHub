import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient, { FetchItemsResponse } from '../services/api-client';
import endpoints from '../services/endpoints';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () =>
            apiClient
                .get<FetchItemsResponse<Genre>>(endpoints.genres)
                .then((res) => res.data),
        // staleTime: 24 * 60 * 60 * 1000, // 24h
        staleTime: 3_000,
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
