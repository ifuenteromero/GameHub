import endpoints from '../services/endpoints';
import useFetchData from './useFetchData';

interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useFetchData<Genre>(endpoints.genres);

export default useGenres;
