import { Genre } from '../entities';
import APIClient from './api-client';
import endpoints from './endpoints';

export default new APIClient<Genre>(endpoints.genres);
