import { UserLayout } from "../components/layout";
import { useState,useEffect } from "react";
import { Card } from "antd";
import Ordertable from "../components/ordertable";
import { getOrder } from "../service/order";
const Order=()=>{
   //  象征性请求一下数据
    const [order,setOrder]=useState([]);
    const initOrder=async ()=>{
      const data=await getOrder();
      setOrder(data);
    };
    useEffect(()=>{
      initOrder();
    },[]);
  
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