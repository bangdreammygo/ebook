import { Input } from 'antd';
import Booklist from "../components/booklist";
import { UserLayout } from "../components/layout";
import { Card, Space } from "antd";
const { Search } = Input;
const HomePage=()=>{
    return(
     <UserLayout active="homepage">
        <Card className="cardContainer"  style={{backgroundColor:"transparent" , borderRadius:"0px",border:"none"}}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Search placeholder="输入要查询的内容"  enterButton size="large" style={{padding:"0px 50px",marginTop:"20px"}} />
                <Booklist></Booklist>
            </Space>
        </Card>
     </UserLayout>
        
    );
};



export default HomePage;