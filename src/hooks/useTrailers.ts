import { useQuery } from '@tanstack/react-query';
import trailersService from '../services/trailersService';

const useTrailers = (gameId: number) =>
    useQuery({
        queryKey: ['trailers', gameId],
        queryFn: () => trailersService.get(gameId.toString()),
        staleTime: 3_000,
    });

export default useTrailers;
