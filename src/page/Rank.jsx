import { UserLayout } from "../components/layout";
import  Chart  from "../components/chart";
import { Card } from "antd";
import {useState } from "react";
import DateRangepicker from "../components/Datepicker";
import { getRank } from "../service/order";
const Rank=()=>{
    // 向后端请求数据后setbooks
    //books结构：
    //[
    // {
    //  name: ,value:
    // },
    // {
    //  name: ,value: 
    // }
    // ]
   const [books,setBooks]=useState([{name:"请选择筛查时间段",value:1}]);
   const [price,setPrice]=useState(0);
    //触发函数
    const dateFliter=async (value)=>{
        const start=value[0];
        const end=value[1];
        //获取数据
        const {data,pay}=await getRank(start,end);
        //刷新图表
        setBooks(data);
        //刷新总价
        setPrice(pay);
    }

   return(
    <UserLayout active={"rank"}>
        <Card
        style={{
            marginTop:"30px",
            textAlign:"center",
            border:"none",
            backgroundColor:"transparent"
        }}
        >
            <DateRangepicker dateFliter={dateFliter}></DateRangepicker>
            <Chart books={books}></Chart>
            <div
             style={{
                fontSize:"30px",
                color:"#ff461f",
                width:"300px",
                borderRadius:"8px",
                backgroundColor:"rgba(255,255,255,0.8)"
             }}
            >消费总价：{price/100}元</div>
        </Card>
    </UserLayout>
   );
};


export default Rank;