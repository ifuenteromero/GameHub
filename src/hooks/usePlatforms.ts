import platforms from '../data/platforms';
// import endpoints from '../services/endpoints';
// import useFetchData from './useFetchData';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useFetchData<Platform>(endpoints.platforms);

const usePlatforms = () => ({
    items: platforms,
    isLoading: false,
    error: null,
});

export default usePlatforms;
