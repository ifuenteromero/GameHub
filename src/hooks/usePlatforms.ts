import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import endpoints from '../services/endpoints';
import { FetchItemsResponse } from './useFetchData';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchItemsResponse<Platform>>(endpoints.platforms)
                .then((res) => res.data),
        // staleTime: 24 * 60 * 60 * 1_000, // 24h
        initialData: { count: platforms.length, results: platforms },
        staleTime: 3_000,
    });

export default usePlatforms;
