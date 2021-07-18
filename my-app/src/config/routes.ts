import IRoute from '../interfaces/route';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import HomePage from '../pages/Home';

const routes: IRoute[] = [
    {
        path: process.env.PUBLIC_URL + '/',
        name: 'Home',
        component: HomePage,
        exact: true,
    },
    {
        path: '/gallery/',
        name: 'Gallery',
        component: Gallery,
        exact: true,
    },
    {
        path: '/about/',
        name: 'About',
        component: About,
        exact: true,
    },
]

export default routes;