// 导航栏组件
import { Col, Menu, Row,Button} from "antd";
import { Link, useNavigate } from "react-router-dom"
import styles from "../css/nav.module.css"

const WorkerNavbar=({children,active})=>{
   const nav=useNavigate();
   const navItems=[
    {
        key:"check",
        label:<Link to={"/worker"}>查看</Link>
    },
    {
        key:"add",
        label:<Link to={"/add"}>新增</Link>
    },
    {
        key:"man",
        label:<Link to={"/mang"}>用户管理</Link>
    },
    {
        key:"userrank",
        label:<Link to={"/userrank"}>用户指标</Link>
    },
    {
      key:"bookrank",
      label:<Link to={"/bookrank"}>畅销榜</Link>
    },
    {
      key:"orderman",
      label:<Link to={"/orderman"}>订单管理</Link>
    }
   ];
    return(
      <Row  justify="start">
        {/* logo */}
        <Col
         style={{
           marginRight:"20px",
           width:"140px",
           color:"gray"
         }}
        >
         <Link to={"/worker"}  className={styles.logo}>管理员中心</Link>
        </Col>
        {/* nav */}
        <Col
        flex={"auto"}
         style={{
            marginRight:"800px"
         }}
        >
        <Menu
        theme="dark"
         mode="horizontal"
         items={navItems}
         defaultSelectedKeys={[active]}
         selectedKeys={[active]}
         >
        </Menu>
        </Col>
         <Button type="primary" style={{marginTop:"16px"}} onClick={()=>{alert("退出登录");sessionStorage.clear("token");nav("/login")}} >退出登录</Button>
      </Row>
    );
}



export default  WorkerNavbar;