import { Home } from "../screens/home/Home.screen";
import { Login } from "../screens/login/Login.component";
import { Welcome } from "../screens/welcome/Welcome.screen";

interface IRouteItem {
    name: any;
    component: any;
}

interface IRoutes {
    welcome: IRouteItem;
    home: IRouteItem;
    login: IRouteItem
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
    }
}