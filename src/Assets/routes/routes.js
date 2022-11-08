import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";

import Login from "../../pages/Login";

import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import ServicePage from "../../pages/Services/ServicePage";


const routes = createBrowserRouter([
    {
    path:'/',
    element: <App/>,
    children:[

        {
            path:'*',
            element: <NotFound/>
        },{
            path:'/services',
            loader:()=> fetch(`https://service-review-server-woad.vercel.app/services`),
            element:<ServicePage/>
        },{
            path:'/login',
            element:<Login/>
        },{
            path:'/signup',
            element:<Register/>
        },{
            path:'/',
       
            element:<Home/>

        }
    ]
    }
])


export default routes