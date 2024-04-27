import { Card, Divider, Space ,Button  } from "antd";
import {  Col, Row ,Input } from "antd";
import {GoldOutlined,UserOutlined} from "@ant-design/icons"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/userinfo.module.css";
import getUser from "../service/user";
import { logout } from "../service/logintest";
import { useNavigate } from "react-router-dom";
const UserInfo=()=>{

    
    //获取导航函数
    const navigate=useNavigate();
    // 初始化用户名：
    const [Username,setUser]=useState("五条悟");
    //初始化密码:
   const [Password,setPassword]=useState("无量空处5t5");
   //初始化余额:
   const remainMoney=2525252.5;
   //初始化用户签名：
   const usermotto="你所热爱的，就是你的生活";
   //判断目前是否应当修改签名
   const [changeMotto,setMotto]=useState(true);
   //点击修改签名，变为可以修改
   const canChangeMotto=()=>{
    setMotto(false);
   };
   //点击保存，停止修改，输入框禁用,同时向后端发出信息修改motto
   const cannotChangeMotto=()=>{
    setMotto(true);
    //下面还缺向后端发出修改请求
   }

   //处理点击退出登录后退出登录的逻辑
   const handleLogOut=async ()=>{
      alert("当前用户退出登录");
      await logout();
      navigate("/login");
   }
   //向后端请求数据后重新渲染用户名和密码
   const renderUser=async ()=>{
      const data=await getUser();
      const {username,password}=data;
      setUser(username);
      setPassword(password);
   }
   useEffect(
    ()=>{
      renderUser();
    }
    ,[]);




    return(
        <Card
         style={{
            backgroundColor:"transparent",
            border:"none",
            color:"white"
         }}
        >
        <Row>
            <Col span={24}>
            <Divider plain style={{color:"white"}}>
               <UserOutlined style={{fontSize:"18px" ,color:"lightgreen"}}></UserOutlined> 个人信息
            </Divider>



            {/* 下面是需要向后端请求数据填充的部分 */}
            <Card style={{backgroundColor:"transparent",border:"none",color:"white",textAlign:"center" }}>
                <Space direction="vertical" size={"large"}     
                style={{
                     display: 'flex',
                       }}>
                <Row style={{padding:"0px 100px"}}>
                <Col span={12}>用户名：</Col>
                <Col span={12}>{Username}</Col>
                </Row>
                <Row style={{padding:"0px 100px"}}>
                <Col span={12}>当前密码：</Col>
                <Col span={12}>{Password}</Col>
                </Row>
                <Link  className={style.changepassword} to={"/"}>修改密码</Link>
                </Space>
            </Card>
            {/* 请求结束 */}
            
            
        
            </Col>
        </Row>
        <Divider plain style={{color:"white"}}>用户签名</Divider>





       {/* 下面部分也需要请求数据 */}
       <Row>
        <Col span={18}>
            <Input
            defaultValue={usermotto}
            disabled={changeMotto}
            style={{
                border:"none",
                backgroundColor:"transparent",
                color:"white"
            }}
            showCount
            maxLength={30}
            />
        </Col>
        <Col span={3}>
            <Button type="primary" onClick={canChangeMotto}>修改签名</Button>
        </Col>
        <Col span={3}>
            <Button onClick={cannotChangeMotto}>保存签名</Button>
        </Col>
       </Row>
      {/* 下面请求个性化签名 */}


       <Row>
        <Col span={24}>
            <Divider plain style={{color:"white"}}>
               <GoldOutlined  style={{color:"gold",fontSize:"18px"}}></GoldOutlined> 我的余额
            </Divider>
            <div style={{color:"coral"}}>￥{remainMoney}</div>
            </Col>
        </Row>
        <Divider plain></Divider>
        <Button type="primary"
        onClick={handleLogOut}
        
        >退出登录</Button>
        </Card>
    );
};

export default UserInfo;