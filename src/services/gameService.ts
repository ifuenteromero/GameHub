import APIClient from './api-client';
import endpoints from './endpoints';
import { Game } from './gamesService';

export default new APIClient<Game>((id: string) => endpoints.gameDetails(id));
