import APIClient from './api-client';
import endpoints from './endpoints';
import { Platform } from './platformsService';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
}

export default new APIClient<Game>(endpoints.games);
