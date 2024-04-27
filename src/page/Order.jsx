import { UserLayout } from "../components/layout";
import { useState,useEffect } from "react";
import { Card } from "antd";
import Ordertable from "../components/ordertable";
const Order=()=>{
   //  象征性请求一下数据
    // const [order,setOrder]=useState([]);
    // const initOrder=async ()=>{
    //   const data=await getOrder();
    //   setOrder(data);
    // };
    // useEffect(()=>{
    //   initOrder();
    // },[]);
      
    //order格式
   const order=[
      {
        id: 0,
        receiver: "五条悟",
        address: "狱门疆",
        phone: "114514",
        date: "2024-04-11 02:31:27.9",
        items: [
          {
            id: 0,
            book: {
              id: 0,
              title: "咒术回战",
              author: "芥见下下",
              description: "五条悟被腰斩",
              price: 0,
              cover: "图片url",
              sales: 0
            },
            number: 1
          },
          {
            id: 0,
            book: {
              id: 0,
              title: "浮生物语",
              author: "沙罗双树",
              description: "大结局",
              price: 15,
              cover: "图片url",
              sales: 0
            },
            number: 2
          }
        ]
      },
      {
        id: 3,
        receiver: "五条悟",
        address: "新宿战场",
        phone: "114514",
        date: "2024-04-15 02:31:27.9",
        items: [
          {
            id: 0,
            book: {
              id: 0,
              title: "浮生物语",
              author: "沙罗双树",
              description: "大结局",
              price: 15,
              cover: "图片url",
              sales: 0
            },
            number: 2
          }
        ]
      }
    ]




     
  return(
      <UserLayout active={"order"}>
        <Card style={{backgroundColor:"transparent", padding:"0px 30px",border:"none"}}>
         <Card>
           <Ordertable>{order}</Ordertable>
         </Card>
        </Card>
      </UserLayout>
    );
};

export default Order;