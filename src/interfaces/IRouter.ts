
export interface IRouter {
    RouteName: string, 
    Pattern: URLPattern,
    Methods: string[],
    View: () => Response
}
