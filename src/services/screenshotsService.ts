import { Screenshot } from '../entities';
import APIClient, { FetchItemsResponse } from './api-client';
import endpoints from './endpoints';

export default new APIClient<FetchItemsResponse<Screenshot>>(
    endpoints.gameScreenshots
);
