import { Trailer } from '../entities';
import APIClient, { FetchItemsResponse } from './api-client';
import endpoints from './endpoints';

export default new APIClient<FetchItemsResponse<Trailer>>((id: string) =>
    endpoints.gameTrailers(id)
);
