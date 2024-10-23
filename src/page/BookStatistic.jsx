//管理员查看统计信息的页面(书籍出售情况)
import WorkerLayout from "../components/workerlayout";
import { useEffect, useState } from "react";
import {getSaleAll,getSaleDate } from "../service/admin";
import { Card ,Breadcrumb} from "antd";
import Datepicker from "../components/Datepicker";
import Bookranker from "../components/Bookrank";
import { Link } from "react-router-dom";
const BookRank=()=>{

    const [data,setData]=useState([]);
    const initState=async ()=>{
        const data=await getSaleAll();
        console.log(data);
        setData(data);
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
        const data=await getSaleDate(Start,End);
        setData(data);
    }


    return(
        <WorkerLayout active={"bookrank"}>
          <Card style={{margin:"40px 40px",backgroundColor:"transparent",border:"none"}}> 
          <Card
                  title={
                    <Breadcrumb
                     items={
                        [
                            {title:<Link to={"/worker"}>管理员中心</Link>},
                            {title:"畅销榜"}
                        ]
                     }
                    ></Breadcrumb>
                   }
          >
            <Datepicker dateFliter={datafilter}></Datepicker>
             <Bookranker data={data}></Bookranker>
            </Card>
          </Card>
        </WorkerLayout>
    );
}

export default BookRank;