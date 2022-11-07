import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Login";

import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";


const routes = createBrowserRouter([
    {
    path:'/',
    element: <App/>,
    children:[

        {
            path:'*',
            element: <NotFound/>
        },{
            path:'/login',
            element:<Login/>
        },{
            path:'/signup',
            element:<Register/>
        }
    ]
    }
])


export default routes