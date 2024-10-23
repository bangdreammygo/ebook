// 增加书籍的组件
import { Card,Breadcrumb} from "antd";
import { Link } from "react-router-dom";
import Addform from "./Addform";
const Addcard=()=>{

     return(
        // 摆放的大体框架
        <Card
        title={
         <Breadcrumb
          items={
             [
                 {title:<Link to={"/worker"}>管理员中心</Link>},
                 {title:"增加书籍"}
             ]
          }
         ></Breadcrumb>
        }
        style={{
         margin:"60px 50px"
        }}
       >

         {/* 实际摆东西的表单区域 */}
         <Addform></Addform>
       </Card>
     );

}


export default Addcard;