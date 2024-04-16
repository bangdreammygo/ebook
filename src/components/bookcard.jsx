//每一本书的bookcard组件
import style from "../css/bookcard.module.css"
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
//临时凑一下数的东西，后端请求数据
import upload1 from "../uploads/uploads1.JPG";
import upload2 from "../uploads/uploads2.JPG";
import upload3 from "../uploads/uploads3.JPG";
import upload4 from "../uploads/uploads4.JPG";
import upload5 from "../uploads/uploads5.JPG";
import upload6 from "../uploads/uploads6.JPG";
import upload7 from "../uploads/uploads7.JPG";
import upload8 from "../uploads/uploads8.JPG";
import { getBook } from "../service/book";
const Bookcard=({children})=>{
    const pics=[upload1,upload2,upload3,upload4,upload5,upload6,upload7,upload8];
    const [bookdetails,setDetails]=useState({});
    // 跳转详情
    const nav=useNavigate();
    const jumpToDetail=(event)=>{
        nav(`/book?idx=${children}`);
    }
    const getInformation=async (idx)=>{
        const data=await getBook(idx);
        setDetails(data);
    }
    useEffect(()=>{
        getInformation(children);
    } ,[children]);
    return(
         <div className={style.bookcard} onClick={jumpToDetail}>
            <div className={style.pic}><img src={pics[children-1]} alt=""  className={style.image} /></div>
            <div className={style.txt}>
                <div className={style.info}>{bookdetails.name}</div>
                <p className={style.price}>{`售价:${bookdetails.price} 元`}</p>
            </div>
       </div>
    );
};

export default Bookcard;