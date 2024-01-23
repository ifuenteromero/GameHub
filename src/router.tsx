import { createBrowserRouter } from 'react-router-dom';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import routes from './routes';
import ErrorPage from './pages/ErrorPage';

const relativeRoute = (route: string, relativeRoute: string = routes.root) =>
    route.substring(relativeRoute.length, route.length);

const router = createBrowserRouter(
    [
        {
            path: routes.root,
            element: <Layout />,
            errorElement: <ErrorPage />,
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
