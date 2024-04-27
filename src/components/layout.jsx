// layout组件，用于控制页面整体的布局方式（这次就不做了，下次做）
import "../css/base.module.css"
import style from "../css/userlayout.module.css"
import { Layout} from "antd";
import { Content, Footer , } from "antd/es/layout/layout";
import Header from "./header";
import { checkLogin } from "../service/logintest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//第一个导出的组件：登录后的组件


//children是里面放的内容，active是目前选中的是哪一栏 
const UserLayout=({children,active})=>{

    const navigate=useNavigate();
    //先检测是否登录
    const check=async ()=>{
        const res= await checkLogin();
        if(!res){
            alert("请先登录！");
            navigate("/login");
        }
    }
    //检测登录与否
    useEffect(
        ()=>{
            check();
        }
    ,[]);
    return(
       <Layout className={style.userlayout}>
        <Header active={active} >{null}</Header>
        <br /><br /><br />
        <Content >{children}</Content>
        <Footer
         style={{
            textAlign:"center",
            fontSize:"14px",
            backgroundColor:"rgba(17,26,44,0.9)"
         }}
        >
            <div style={{color:"white"}}>made by djf</div>
        </Footer>
       </Layout>
    );

};




// 登陆页面的组件
const LoginLayout=({children})=>{
    return(
    <Layout className={style.loginlayout}>
        <Header className="heaader">{null}</Header>
        <br /><br /><br />
        <Content>{children}</Content>
        <Footer
         style={{
            textAlign:"center",
            fontSize:"14px",
            backgroundColor:"#111a2c"
         }}
        >
            <div style={{color:"white"}}>made by djf</div>
        </Footer>
    </Layout>
    );
};



export {UserLayout,LoginLayout};