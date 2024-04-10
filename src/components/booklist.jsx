//booklist组件，用于防止书籍
import "../css/base.module.css"
import Bookcard from "./bookcard";
import  style from  "../css/booklist.module.css"
import { List, Pagination, Space } from "antd"
//简单搞一个数组（无后端所以先写死只能）
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Booklist=()=>{
    //创建一个空数组
    const [books,setBooks]=useState([1,2,3,4,5,6,7,8]);
    return(
        <div className={style.goods}>


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
            <Pagination current={1} pageSize={10}
         total={3} />
        </div>
    );
};



export default Booklist;