import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient from '../services/api-client';
import endpoints from '../services/endpoints';
import { FetchItemsResponse } from './useFetchData';

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
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
