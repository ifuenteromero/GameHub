import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformsService from '../services/platformsService';

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: platformsService.getAll,
        // staleTime: 24 * 60 * 60 * 1_000, // 24h
        initialData: platforms,
        staleTime: 3_000,
    });

export default usePlatforms;
