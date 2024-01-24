import { useQuery } from '@tanstack/react-query';
import gameService from '../services/gameService';
import { Game } from '../services/gamesService';

const useGame = (slug: string) =>
    useQuery<Game, Error>({
        queryKey: ['game', slug],
        queryFn: () => gameService.get(slug),
        staleTime: 3_000,
    });

export default useGame;
