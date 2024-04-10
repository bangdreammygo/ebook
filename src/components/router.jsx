// 这个组件是路由组件，用于导航的各个page
import { createBrowserRouter } from "react-router-dom";
import Cart from "../page/Cart";
import HomePage from "../page/HomePage";
import Order  from "../page/Order";
import Rank from "../page/Rank";
import Login from "../page/Login";
import Detail from "../page/Detail";
import Userpage from "../page/User";
const router=createBrowserRouter(
    [
        {
            index:true,
            element:<HomePage></HomePage>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        {
            path:"/order",
            element:<Order></Order>
        },
        {
            path:"/rank",
            element:<Rank></Rank>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/book",
            element:<Detail></Detail>
        },
        {
            path:"/user",
            element:<Userpage></Userpage>
        },
        {
            path:"*",
            element:<HomePage></HomePage>
        }
    ]
);



export default router;