import { Card } from "antd";
import { useState,useEffect } from "react";
import { UserLayout } from "../components/layout";
import CartItemTable from "../components/cartitemtable";
const Cart=()=>{
  //  象征性请求一下数据
  const [cart,setCart]=useState([]);
   async function getcart(){
       const res=await fetch("http://localhost:8888/data");
       const data=await res.json();
       setCart(data);
   };
   useEffect(()=>{
      getcart();
   },[]);
    return(
      <UserLayout active={"cart"}>
        <Card style={{backgroundColor:"transparent", padding:"0px 10px"}}>
        <CartItemTable>{cart}</CartItemTable>
        </Card>
      </UserLayout>
    );
};

export default  Cart;