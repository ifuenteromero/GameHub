import { createBrowserRouter } from 'react-router-dom';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import routes from './routes';

const relativeRoute = (route: string, relativeRoute: string = routes.root) =>
    route.substring(relativeRoute.length, route.length);

const router = createBrowserRouter(
    [
        {
            path: routes.root,
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: relativeRoute(routes.gameDetail(':id')),
                    element: <GameDetailPage />,
                },
            ],
        },
    ],
    { basename: routes.baseUrl }
);

export default router;
