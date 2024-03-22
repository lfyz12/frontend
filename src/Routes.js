import About from "./components/About/About";
import Account from "./components/Account/Account";
import Auth from "./components/Auth/Auth";
import Curs from "./components/Curs/Curs";
import CursList from "./components/Curs/CursList";
import MyCurs from "./components/Curs/MyCurs";
import Home from "./components/Home/Home";
import { ABOUT_ROUTE, ACCOUNT_ROUTE, CURS_ROUTE, CURSDETAIL_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MYCURS_ROUTE, REGISTER_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTER_ROUTE,
        element: <Auth/>
    },
    {
        path: CURSDETAIL_ROUTE + ':id',
        element: <Curs/>
    },
    {
        path: CURS_ROUTE,
        element: <CursList/>
    },
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: ABOUT_ROUTE,
        element: <About/>
    }
]

export const authRoute = [
    {
        path: ACCOUNT_ROUTE,
        element: <Account/>
    },
    {
        path: MYCURS_ROUTE + ':id',
        element: <MyCurs/>
    }
]