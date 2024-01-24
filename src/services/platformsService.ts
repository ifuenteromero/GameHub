import { Platform } from '../entities';
import APIClient from './api-client';
import endpoints from './endpoints';

export default new APIClient<Platform>(endpoints.platforms);
