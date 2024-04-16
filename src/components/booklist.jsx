//booklist组件，用于防止书籍
import "../css/base.module.css"
import Bookcard from "./bookcard";
import  style from  "../css/booklist.module.css"
import { List, Pagination, Space } from "antd"
//简单搞一个数组（无后端所以先写死只能）
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Booklist=({book})=>{
    //创建一个空数组
    const [books,setBooks]=useState([]);
    useEffect(
        ()=>{
            setBooks(book);
        }
        ,[book]);
    return(
        <div className={style.goods}>

             {/*list渲染书籍*/}
            <List
            grid={{
                gutter: 16, column: 5
            }}
            dataSource={books}
            renderItem={(item) => (
                <List.Item>
                    <Bookcard key={item}>{item}</Bookcard>
                </List.Item>
            )}
        />


             <br />
             {/* 分页器，暂时锁在第一页,一共30/10=3页 */}
            <Pagination current={1} pageSize={10}total={30} />
        </div>
    );
};



export default Booklist;