import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchItemsResponse<U> {
    count: number;
    results: U[];
}

const useFetchData = <T>(endpoint: string) => {
    const [items, setItems] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const config = { signal: controller.signal };
        apiClient
            .get<FetchItemsResponse<T>>(endpoint, config)
            .then(({ data }) => setItems(data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
            .finally(() => setLoading(false));
        return () => controller.abort();
    }, []);

    return { items, error, isLoading };
};

export default useFetchData;
