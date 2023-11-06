import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Sales from "../pages/Sales";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import Formul from "../pages/Formul";
import Nosotros from "../pages/Nosotros";
import Registro from "../pages/Registro";
import Resena from "../pages/Resena";
import History from "../pages/History";
import Favoritos from "../pages/Favoritos";
import EditUser from "../pages/Pages-Dash/EditDash";
import Clima from "../components/Clima";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sales",
        element: <Sales/>
    },
    {
        path:'/sidebar',
        element: <Sidebar/>
    },
    {
        path:'/footer',
        element: <Footer/>
    },
    {
        path:'/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/formul',
        element: <Formul/>
    },
    {
        path:'/nosotros',
        element: <Nosotros/>
    },
    {
        path:'/registro',
        element: <Registro/>
    },
    {
        path:'/resena',
        element: <Resena/>
    },
    {
        path:'/history',
        element: <History/>
    },
    {
        path:'/favoritos',
        element: <Favoritos/>
    },
    {
        path:'/EditDash/:id',
        element: <EditUser/>
    },
    {
        path:"RoueterPro",
        element: <RouterProvider/>
    },
    {
        path:"/clima",
        element: <Clima/>
    }
]);