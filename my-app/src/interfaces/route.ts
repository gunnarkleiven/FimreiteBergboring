export default interface IRoute {
    path: string;       // The path in the URL, after whatever domain we are using
    name: string;       // Actual name of the page
    exact: boolean;     // Whether or not the routing path has to be exact
    component: any;     // Actual component we are exporting
    props?: any;        // Any extra props you want to pass in when we make the routes configuration
}