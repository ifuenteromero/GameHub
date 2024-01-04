import genres from '../data/genres';
// import endpoints from '../services/endpoints';
// import useFetchData from './useFetchData';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useFetchData<Genre>(endpoints.genres);
const useGenres = () => ({ items: genres, isLoading: false, error: null });

export default useGenres;
