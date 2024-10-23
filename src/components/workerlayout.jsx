// layout组件，管理员界面的layout
import "../css/base.module.css"
import style from "../css/userlayout.module.css"
import { Layout} from "antd";
import { Content, Footer , } from "antd/es/layout/layout";
import Header from "./workerheader";
import { checkWorker } from "../service/logintest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



//children是里面放的内容，active是目前选中的是哪一栏 
const WorkerLayout=({children,active})=>{

    const navigate=useNavigate();
    //先检测是否登录
    const check=async ()=>{
        const res= await checkWorker();
        if(!res){
            alert("你不是管理员！");
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


export default WorkerLayout;