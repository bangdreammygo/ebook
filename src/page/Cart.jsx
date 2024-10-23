import { Card } from "antd";
import { useState,useEffect } from "react";
import { UserLayout } from "../components/layout";
import CartItemTable from "../components/cartitemtable";
import {getcart}  from "../service/cart"
const Cart=()=>{
  const [cart,setCart]=useState([]);
  const initCart=async ()=>{
    const data=await getcart();
    setCart(data);
  }
   useEffect(()=>{
      initCart();    
   },[]);
    return(
      <UserLayout active={"cart"}>
        <Card style={{backgroundColor:"transparent", padding:"0px 30px",border:"none"}}>
         <Card>
            <CartItemTable init={initCart}>{cart}</CartItemTable>
         </Card>
        </Card>
      </UserLayout>
    );
};

export default  Cart;