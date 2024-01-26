import { useQuery } from '@tanstack/react-query';
import screenshotsService from '../services/screenshotsService';

const useScreenshot = (gameId: string) =>
    useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: () => screenshotsService.get(gameId),
        staleTime: 3_000,
    });

export default useScreenshot;
