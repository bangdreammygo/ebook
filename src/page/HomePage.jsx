import { Input } from 'antd';
import Booklist from "../components/booklist";
import { UserLayout } from "../components/layout";
import { Card, Space } from "antd";
import { useState } from 'react';
import { searchBook } from '../service/book';
const { Search } = Input;
const HomePage=()=>{
    const [book,setBooks]=useState([1,2,3,4,5,6,7,8]);
    
    
    //实现简易的搜索功能
    const setSearchResult=async (name)=>{
        const data= await searchBook(name);
        setBooks(data);
    }


    return(
     <UserLayout active="homepage">
        <Card className="cardContainer"  style={{backgroundColor:"transparent" , borderRadius:"0px",border:"none"}}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Search placeholder="输入要查询的内容"  enterButton size="large" style={{padding:"0px 50px",marginTop:"20px"}}
                defaultValue={""}
                allowClear
                onSearch={(name)=>{setSearchResult(name);}}
                />
                <Booklist book={book}></Booklist>
            </Space>
        </Card>
     </UserLayout>
        
    );
};



export default HomePage;