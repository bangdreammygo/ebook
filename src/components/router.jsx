// 这个组件是路由组件，用于导航的各个page
import { createBrowserRouter} from "react-router-dom";
import Cart from "../page/Cart";
import HomePage from "../page/HomePage";
import Order  from "../page/Order";
import Rank from "../page/Rank";
import Login from "../page/Login";
import Detail from "../page/Detail";
import Userpage from "../page/User";
import Check from "../page/Check";
import Add from "../page/Add";
import Modify from "../page/Modify";
import Mang from "../page/Manage";
import Orderman from "../page/OrderMan";
import UserRank from "../page/UserStatistic";
import BookRank from "../page/BookStatistic";
import Register from "../page/Register";
import Micro from "../page/Micro";
import NeoPage from "../page/Neo4j";
const router=createBrowserRouter(
    [
        {
            index:true,
            element:<HomePage></HomePage>
        },
        {
            path:"/home",
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
            path:"/worker",
            element:<Check></Check>
        },
        {
            path:"/add",
            element:<Add></Add>
        },
        {
            path:"/modi",
            element:<Modify></Modify>
        },
        {
            path:"/mang",
            element:<Mang></Mang>
        },
        {
            path:"/orderman",
            element:<Orderman></Orderman>
        },
        {
            path:"/userrank",
            element:<UserRank></UserRank>
        },
        {
            path:"/bookrank",
            element:<BookRank></BookRank>
        },
        {
            path:"/reg",
            element:<Register></Register>
        },
        {
            path:"/micro",
            element:<Micro></Micro>
        },
        {
            path:"/neo",
            element:<NeoPage></NeoPage>
        },
        {
            path:"*",
            element:<HomePage></HomePage>
        }
    ]
);



export default router;