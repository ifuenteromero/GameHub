import endpoints from '../services/endpoints';
import useFetchData from './useFetchData';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useFetchData<Platform>(endpoints.platforms);

export default usePlatforms;
