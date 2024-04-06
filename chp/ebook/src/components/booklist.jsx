//booklist组件，用于防止书籍
import "../css/base.module.css"
import Bookcard from "./bookcard";
import  style from  "../css/booklist.module.css"

//简单搞一个数组（无后端所以先写死只能）
import { useState } from "react";


const Booklist=()=>{
    //创建一个空数组
    const [books,setBooks]=useState([1,2,3,4,5,6,7,8]);
    return(
        <div className={style.goods}>
            <div className={style.wrapper}>
                <ul>
                    {
                     books.map(item=>{
                        return(
                        <Bookcard key={item}>{item}</Bookcard>
                         )
                       })
                    }
                </ul>
            </div>
        </div>
    );
};



export default Booklist;