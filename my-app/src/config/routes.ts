import IRoute from '../interfaces/route';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true,
    },
    {
        path: '/about/',
        name: 'About',
        component: AboutPage,
        exact: true,
    },
]

export default routes;