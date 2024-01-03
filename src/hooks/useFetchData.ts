import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchItemsResponse<U> {
    count: number;
    results: U[];
}

const useFetchData = <T>(
    endpoint: string,
    deps?: any[],
    requestConfig?: AxiosRequestConfig
) => {
    const [items, setItems] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            setLoading(true);
            const controller = new AbortController();
            const config = { signal: controller.signal, ...requestConfig };
            apiClient
                .get<FetchItemsResponse<T>>(endpoint, config)
                .then(({ data }) => setItems(data.results))
                .catch((error) => {
                    if (error instanceof CanceledError) return;
                    setError(error.message);
                })
                .finally(() => setLoading(false));
            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { items, error, isLoading };
};

export default useFetchData;
