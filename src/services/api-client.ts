import axios from 'axios';
import endpoints from './endpoints';

export default axios.create({
    baseURL: endpoints.baseUrl,
    params: {
        key: '7c8a25e2452249d6903976283b68cd92',
    },
});
