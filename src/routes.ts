const baseUrl = import.meta.env.BASE_URL;
const root = '/';
const games = '/games';
const gameDetail = (id: number | ':id') => `${games}/${id}`;

export default {
    baseUrl,
    root,
    games,
    gameDetail,
};
