import Home from './pages/Home';
import Dashboards from './pages/Dashboards';
import Profile from './pages/Profile';
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Ai from "./pages/Ai";
import Analytics from "./pages/Analytics";

const routes = [
    { path: '/', component: <Dashboards />, exact: true },
    { path: '/profile', component: <Profile /> },
    { path: '/products', component: <Products /> },
    { path: '/orders', component: <Orders /> },
    { path: '/analytics', component: <Analytics /> },
    { path: '/ai', component: <Ai /> },
];

export default routes;