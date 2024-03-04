import Home from './pages/Home';
import Dashboards from './pages/Dashboards';
import Profile from './pages/Profile';
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Ai from "./pages/Ai";

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/dashboards', component: <Dashboards /> },
    { path: '/profile', component: <Profile /> },
    { path: '/products', component: <Products /> },
    { path: '/orders', component: <Orders /> },
    { path: '/ai', component: <Ai /> },
];

export default routes;