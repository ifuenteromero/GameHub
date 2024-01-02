import endpoints from '../services/endpoints';
import useFetchData from './useFetchData';

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useFetchData<Genre>(endpoints.genres);

export default useGenres;
