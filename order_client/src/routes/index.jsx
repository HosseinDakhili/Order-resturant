import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home/Home";
import Foods from "../pages/Foods/Foods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import Cart from "../pages/Cart/Cart";
import Public from '../Routes/Authentication/Public'; 
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";
import Categories from "../pages/Categories/Categories";
import BestFoods from "../pages/BestFoods/BestFoods";
import Feedback from "../pages/Feedback/Feedback";
import Private from "./Authentication/Private";
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
                path:'/categories',
                element:<Categories/>

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
                path:'/best-foods',
                element:<BestFoods/>
            },
            {
                path:'/feedback',
                element:<Feedback/>
            },
            {
                path:'/cart',
                element:<Private/>,
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