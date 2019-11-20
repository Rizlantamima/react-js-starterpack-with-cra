import Home from './Pages/Home/Home';
import About from './Pages/About/About';

export default [
    {
      route_path: '/',
      component: Home,
      exact: true
    },
    {
      route_path: '/about',
      component: About,
      exact: true
    }
  ];
  