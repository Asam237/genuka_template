import { DetailProduct } from "../screens/detailProduct/DetailProduct.screen";
import { Home } from "../screens/home/Home.screen";
import { Login } from "../screens/login/Login.screen";
import { Signup } from "../screens/signup/Signup.screen";
import { Welcome } from "../screens/welcome/Welcome.screen";

interface IRouteItem {
    name: any;
    component: any;
}

interface IRoutes {
    welcome: IRouteItem;
    home: IRouteItem;
    login: IRouteItem;
    signup: IRouteItem;
    detail: IRouteItem
}

export const ROUTES: IRoutes = {
    welcome: {
        name: "welcome",
        component: Welcome
    },
    home: {
        name: "home",
        component: Home
    },
    login: {
        name: "login",
        component: Login
    },
    signup: {
        name: "signup",
        component: Signup
    },
    detail: {
        name: "detail",
        component: DetailProduct
    }
}