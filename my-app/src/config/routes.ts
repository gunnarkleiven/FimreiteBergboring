import IRoute from '../interfaces/route';
import About from '../pages/About';
import Services from '../pages/Services';
import Empty from '../pages/Empty';
import HomePage from '../pages/Home';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true,
    },
    {
        path: '/services/',
        name: 'Services',
        component: Services,
        exact: true,
    },
    {
        path: '/empty/',
        name: 'Empty',
        component: Empty,
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