import { UserLayout } from "../components/layout";
import { Input } from 'antd';
import { Card} from "antd";
import { getAuthor } from "../service/extent-servce";
import { useState } from "react";

const { Search } = Input;
const Micro=()=>{

    /////////////////这里后续再加上usestate即可，里面存放的是作者名，调用handlesearch后即可使用set方法更新值
    const [author,setAuthor]=useState("搜索您想搜索的作者");

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const handleSearch=async (keyword)=>{
        const data=await getAuthor(keyword);
        setAuthor(data);
    }

    return(
        <UserLayout active={"micro"}>
            <Search placeholder="输入要查询的作者的书名"  enterButton size="large" style={{padding:"0px 50px",marginTop:"60px"}}
                defaultValue={""}
                allowClear
                onSearch={handleSearch}
                />
            
            <Card style={{
                margin:"30px 60px",
                padding:"0px 30px",
                backgroundColor:"transparent",
                border:"none",
            }}>
                <Card
                 style={{
                   height:"200px",
                   textAlign:"center",
                   fontSize:"30px",
                   lineHeight:"30px"
                 }}
                >
                {author}
                </Card>
            </Card>
        </UserLayout>
    );
}

export default Micro;