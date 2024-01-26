const baseUrl = 'https://api.rawg.io/api';
const games = '/games';
const genres = '/genres';
const platforms = '/platforms/lists/parents';

export type EndpointDetail = (id: string) => string;

const gameDetails: EndpointDetail = (id: string) => `${games}/${id}`;
const gameTrailers: EndpointDetail = (id: string) => `${games}/${id}/movies`;
const gameScreenshots: EndpointDetail = (id: string) =>
    `${games}/${id}/screenshots`;

export default {
    baseUrl,
    games,
    genres,
    platforms,
    gameDetails,
    gameTrailers,
    gameScreenshots,
};
