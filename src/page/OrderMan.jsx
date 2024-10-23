// 管理员进行订单管理的一个界面
import WorkerLayout from "../components/workerlayout";
import { useState,useEffect } from "react";
import { Card,Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Ordertable from "../components/ordertable";
import Datepicker from "../components/Datepicker";
import Search from "antd/es/input/Search";
import { getAllOrder,getDateOrder,getKeyOrder,getDoubleOrder } from "../service/admin";


const Orderman=()=>{
    // 请求一下数据
    const [order,setOrder]=useState([]);
    // 两个时间参数
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    //搜索keyword
    const [keyword,setKeyword]=useState("");

    const initOrder=async ()=>{
      const data=await getAllOrder();
      setOrder(data);
    };
    useEffect(()=>{
      initOrder();
    },[]);
    //日期筛选函数
    const dateFliter=async (value)=>{
       if(value[0]===""){
        setStart("");
        setEnd("");
        return;
       };
       //value是一个数组，里面有两个值：起始时间和开始时间，考虑将其获取出来，传参给后端，从而使用between and 查找单号
       const Start=value[0];
       const End=value[1];
       setStart(Start);
       setEnd(End);
       //如果没有设置关键词
       if(keyword===""){
       const data=await getDateOrder(Start,End);
       setOrder(data);
       }
       //设置了关键词
       else{
        await DoubleFliter(Start,End,keyword);
       }
    } 
    //关键词搜索函数
    const KeyFliter=async (keywords)=>{
        //设置
        setKeyword(keywords);
        //如果没有设置时间
        if(start===""&&end==="")
        {
        const data=await getKeyOrder(keyword);
        setOrder(data);
        }
        //如果同时还设置了时间的筛选范围就要重新
        else{
          await DoubleFliter(start,end,keywords);
        }
    } 

    //时间关键词一起搜索
    const DoubleFliter=async (S,E,K)=>{
      const data=await getDoubleOrder(S,E,K);
      setOrder(data);
    }

     
  return(
      <WorkerLayout active={"orderman"}>
        <Card style={{backgroundColor:"transparent", padding:"0px 30px",border:"none"}}>
         <Card
            title={
            <Breadcrumb
            items={
            [
              {title:<Link to={"/worker"}>管理员中心</Link>},
              {title:"订单管理"}
            ]
            }
            ></Breadcrumb>
           }
         >
         <Datepicker dateFliter={dateFliter}></Datepicker>
        <Search
        placeholder="输入要查询的书名"  enterButton size="large" style={{padding:"0px 50px",marginTop:"20px",marginBottom:"20px"}}
        defaultValue={""}
        allowClear
        onSearch={KeyFliter}
        >

        </Search>
          <Ordertable>{order}</Ordertable>
         </Card>
        </Card>
      </WorkerLayout>
    );
};

export default Orderman;