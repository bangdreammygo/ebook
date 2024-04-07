// header组件负责渲染头部
import "../css/base.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import Navbar from "./Navbar";
const MYHeader=({children,active})=>{
   return(
    <Header style={{
      // backgroundColor:"rgba(255,255,255,0.5)"
      }}>
      <Navbar active={active}>{children}</Navbar>
    </Header>
   );
};


export default MYHeader;