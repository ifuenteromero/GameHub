const baseUrl = import.meta.env.BASE_URL;
const root = '/';
const games = '/games';
const gameDetail = (slug: string) => `${games}/${slug}`;

export default {
    baseUrl,
    root,
    games,
    gameDetail,
};
