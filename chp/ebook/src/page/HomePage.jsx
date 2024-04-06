import { Input } from 'antd';
import Booklist from "../components/booklist";
import { UserLayout } from "../components/layout";
import { Card, Space } from "antd";
const { Search } = Input;
const HomePage=()=>{
    return(
     <UserLayout active="homepage">
        <Card className="cardContainer"  style={{backgroundColor:"transparent" , borderRadius:"0px"}}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Search placeholder="输入要查询的内容"  enterButton size="large" />
                <Booklist></Booklist>
            </Space>
        </Card>
     </UserLayout>
        
    );
};



export default HomePage;