import { IRouter } from "../interfaces/IRouter.ts"; // Scheme of the router
import { main_page, usuarios } from "../views/main_views.ts";


export const Routes: IRouter[] = [
    {RouteName: "main", Pattern: new URLPattern({pathname: "/main"}), Methods: ["GET", "POST"], View: main_page},
    {RouteName: "usuario", Pattern: new URLPattern({pathname: "/usuario"}), Methods: ["POST"], View: usuarios},
]
