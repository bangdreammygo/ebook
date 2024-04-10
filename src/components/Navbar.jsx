// 导航栏组件
import { Col, Menu, Row, Dropdown, Button } from "antd";
import { Link } from "react-router-dom"
import styles from "../css/nav.module.css"
const Navbar=({children,active})=>{
   const navItems=[
    {
        key:"homepage",
        label:<Link to={"/"}>首页</Link>
    },
    {
        key:"cart",
        label:<Link to={"/cart"}>购物车</Link>
    },
    {
        key:"order",
        label:<Link to={"/order"}>订单</Link>
    },
    {
        key:"rank",
        label:<Link to={"/rank"}>排行</Link>
    },
    {
      key:"user",
      label:<Link to={"/user"}>我的</Link>
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
         <Link to={"/login"}  className={styles.logo}>E-Book</Link>
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
        //  style={{
        //     backgroundColor:"transparent"
        //  }}
         >
        </Menu>
        </Col>
      </Row>
    );
}



export default  Navbar