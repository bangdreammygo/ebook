//管理员查看统计信息的页面(用户购买情况)
import WorkerLayout from "../components/workerlayout";
import Userrank from "../components/Userrank";
import { useEffect, useState } from "react";
import { getBuysAll,getBuysDate } from "../service/admin";
import { Card ,Breadcrumb} from "antd";
import Datepicker from "../components/Datepicker";
import { Link } from "react-router-dom";
const UserRank=()=>{

    const [userdata,setUserdata]=useState([{id:0,username:"",total:0}]);
    const initState=async ()=>{
        const data=await getBuysAll();
        console.log(data);
        setUserdata(data);
    }
    useEffect(
        ()=>{
            initState();
        }
        ,[]);

    //处理按时间筛选
    const datafilter=async (value)=>{
        if(value[0]==="")return;
        //value是一个数组，里面有两个值：起始时间和开始时间，考虑将其获取出来，传参给后端，从而使用between and 查找单号
        const Start=value[0];
        const End=value[1];
        const data=await getBuysDate(Start,End);
        setUserdata(data);
    }


    return(
        <WorkerLayout active={"userrank"}>
          <Card style={{margin:"40px 40px",backgroundColor:"transparent",border:"none"}}> 
          <Card
                  title={
                    <Breadcrumb
                     items={
                        [
                            {title:<Link to={"/worker"}>管理员中心</Link>},
                            {title:"用户指标查看"}
                        ]
                     }
                    ></Breadcrumb>
                   }
          >
            <Datepicker dateFliter={datafilter}></Datepicker>
             <Userrank userdata={userdata}></Userrank>
            </Card>
          </Card>
        </WorkerLayout>
    );
}

export default UserRank;