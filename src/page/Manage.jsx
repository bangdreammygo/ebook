// 用户管理界面
import WorkerLayout from "../components/workerlayout";
import Usertable from "../components/Usertable";
import Card from "antd/es/card/Card";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { banUser,getUsers } from "../service/admin";
import { useEffect,useState } from "react";


const Mang=()=>{
      

    const [users, setUsers] = useState([]);

    const initUsers =  async () => {
        let users = await getUsers();
        setUsers(users);
    }

    useEffect(() => {
        initUsers();
    }, []);

    const updateBan = async (id, ban) => {
        await banUser({id, ban});
        await initUsers();
    }


    return(<WorkerLayout active={"man"}>
            <Card style={{backgroundColor:"transparent",border:"none"}}>
             <Card style={{margin:"30px 20px"}}
                title={
                <Breadcrumb
                 items={
                [
                {title:<Link to={"/worker"}>管理员中心</Link>},
                {title:"用户管理"}
                   ]
                }
                ></Breadcrumb>
                }             
             >
             <Usertable userData={users} onUpdateBan={updateBan}></Usertable>
             </Card>
            </Card>
           </WorkerLayout>)
}


export default Mang;