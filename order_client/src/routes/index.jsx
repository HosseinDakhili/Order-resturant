import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home/Home";
import Foods from "../pages/Foods/Foods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import Cart from "../pages/Cart/Cart";
import Public from '../Routes/Authentication/Public'; 
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {

                index:true,
                element:<Home/>
            },
            {
                path:'/foods/:categoryId/:categoryName',
                element:<Foods/>
            },
            {
                path:'/food-details/:id/:name',
                element:<FoodDetails/>
            },
            {
                path:'/cart',
                element:<Public/>,
                children:[
                    {
                        index:true,
                        element:<Cart/>
                    }
                ]
            },
            {
                path:'/auth',
                element:<Public/>,
                children:[
                    {
                        index:true,
                        element:<Auth/>
                    }
                ]
            }
        ]

    },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router