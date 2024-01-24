const baseUrl = 'https://api.rawg.io/api';
const games = '/games';
const genres = '/genres';
const platforms = '/platforms/lists/parents';

export type EndpointDetail = (id: string) => string;

const gameDetails: EndpointDetail = (id: string) => `${games}/${id}`;

export default {
    baseUrl,
    games,
    genres,
    platforms,
    gameDetails,
};
