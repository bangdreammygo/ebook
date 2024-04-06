// layout组件，用于控制页面整体的布局方式（这次就不做了，下次做）
import "../css/base.module.css"
import style from "../css/userlayout.module.css"
import { Layout, Space } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Header from "./header";
//第一个导出的组件：登录后的组件
const UserLayout=({children,active})=>{
    return(
       <Layout className={style.userlayout}>
        <Header active={active}>{null}</Header>
        <Content >{children}</Content>
        <Footer
         style={{
            textAlign:"center",
            fontSize:"14px",
            backgroundColor:"rgba(255,255,255,0.5)"
         }}
        >
            <div>made by djf</div>
        </Footer>
       </Layout>
    );

};
// 登陆页面的组件
const LoginLayout=({children})=>{
    return(
    <Layout className="basic-layout">
        <Header className="heaader">{null}</Header>
        <Content>{children}</Content>
        <Footer
         style={{
            textAlign:"center",
            fontSize:"14px",
            backgroundColor:"rgba(255,255,255,0.5)"
         }}
        >
            <div>made by djf</div>
        </Footer>
    </Layout>
    );
};



export {UserLayout,LoginLayout};