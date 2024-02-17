import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const publicRoutes = [
    {
        path: "/",
        component: <Login />,
        name: "Login",
        index: true
    },
    {
        path: "/register",
        component: <Register />,
        name: "Register",
        index: false
    }
];

const privateRoutes = [
    {
        path: "/",
        component: <Home />,
        name: "Home",
        index: true
    },
    {
        path: "/dashboard",
        component: <Dashboard />,
        name: "Dashboard",
        index: false
    }
];

export { publicRoutes, privateRoutes };