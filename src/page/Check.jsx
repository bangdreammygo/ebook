// 管理员查看全部书籍情况的页面
import WorkerLayout from "../components/workerlayout";
import { Card } from "antd";
import { Input } from 'antd';
import Booktable from "../components/Booktable";
import { useEffect, useState } from "react";
import { getAllBooks,searchKey } from "../service/book";

const { Search } = Input;
const Check=()=>{
    // 渲染用的书籍数据
    const [books,setBooks]=useState([]);
    // 异步请求数据
    const getall=async ()=>{
        const book=await getAllBooks();
        setBooks(book);
    }
    // 重新渲染
    useEffect(
        ()=>{
            getall();
        }
        ,[]);

    //搜索过滤
    const searchFun=async (keyword)=>{
        const res=await searchKey(keyword);
        setBooks(res);
    }
    
    return (
        <WorkerLayout active={"check"}>
         <Card style={{backgroundColor:"transparent", padding:"0px 30px",border:"none"}}>
         <Search placeholder="输入要查询的内容"  enterButton size="large" style={{padding:"0px 50px",marginTop:"20px"}}
                defaultValue={""}
                allowClear
                onSearch={searchFun}
             />
            <br />
            <Card style={{marginTop:"20px"}}>
               <Booktable books={books} refresh={getall}></Booktable>
            </Card>
         </Card>
        </WorkerLayout>
    );
}


export default Check;