import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import endpoints from '../services/endpoints';
import { CanceledError } from 'axios';

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const config = {
            signal: controller.signal,
        };
        setLoading(true);
        apiClient
            .get<FetchGenresResponse>(endpoints.genres, config)
            .then(({ data }) => setGenres(data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;