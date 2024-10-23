// 基本复用addcard
import { Card,Breadcrumb} from "antd";
import { Link } from "react-router-dom";
import Modiform from "./Modiform";
const Modicard=({bookid})=>{

     return(
        // 摆放的大体框架
        <Card
        title={
         <Breadcrumb
          items={
             [
                 {title:<Link to={"/worker"}>管理员中心</Link>},
                 {title:"修改书籍"}
             ]
          }
         ></Breadcrumb>
        }
        style={{
         margin:"60px 50px"
        }}
       >
         {/* 实际摆东西的表单区域 */}
         <Modiform bookid={bookid}></Modiform>
       </Card>
     );

}


export default Modicard;