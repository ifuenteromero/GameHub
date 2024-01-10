import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import genresServices from '../services/genresServices';

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: genresServices.getAll,
        // staleTime: 24 * 60 * 60 * 1000, // 24h
        staleTime: 3_000,
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
