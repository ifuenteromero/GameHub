import axios from 'axios';
import endpoints from './endpoints';

export default axios.create({
    baseURL: endpoints.baseUrl,
    params: {
        key: import.meta.env.VITE_API_KEY,
    },
});
