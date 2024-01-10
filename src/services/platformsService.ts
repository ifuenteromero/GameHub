import APIClient from './api-client';
import endpoints from './endpoints';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export default new APIClient<Platform>(endpoints.platforms);
