import APIClient from './api-client';
import endpoints from './endpoints';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export default new APIClient<Genre>(endpoints.genres);
