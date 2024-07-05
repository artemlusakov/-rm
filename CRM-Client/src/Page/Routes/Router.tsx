import {createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import NotFound from '../NotFound/NotFound'



const router = createBrowserRouter([
    {
        path: "*",
        errorElement: <NotFound/>
    },
    {
        path: "/",
        element: <Home/>,
        errorElement:<NotFound/>,
    },
    
    {
        path: "/home",
        element: <Home/>,
        errorElement:<NotFound/>,
    }
]);

export default router