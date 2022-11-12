import { IRouter } from "../interfaces/IRouter.ts"; // Scheme of the router
import { main_page } from "../views/main_views.ts";


export const Routes: IRouter[] = [
    {RouteName: "r1", Pattern: new URLPattern({pathname: "/"}), Methods: ["GET", "POST"], View: main_page},
]
