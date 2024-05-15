// 书籍详情页面
import { useSearchParams } from "react-router-dom";
import { UserLayout } from "../components/layout";
import BookInfo from "../components/bookinfo";
import { useEffect, useState } from "react";
import { getBookById } from "../service/book";
const Detail=()=>{
  //获取
   const [params]=useSearchParams();
   const id=params.get("id");
   //书籍的样式
   const [book,setBook]=useState({
       id: 1,
       title: "假面骑士decade外传",
       cover: null,
       price: 25.5,
       rest: 500,
       author: "石章森太郎",
       brief: "突然开始崩溃的世界。在袭击人们的无数的怪物的面前，丧失记忆的青年·门矢士变身为假面骑士Decade。他所被赋予的使命，就是将世界从消灭中拯救出来 ……。与别世界的假面骑士们的相遇。然后战斗。巡游9个平行世界的Decade之旅，现在开始。",
       isbn: null
   });
   const getBookinfoById=async (ID)=>{
         const data=await getBookById(ID);
         setBook(data);
   }
   useEffect(
    ()=>{
      getBookinfoById(id);
    }
    ,[])
   return (
    <UserLayout active={null}>
        <BookInfo>{book}</BookInfo>   
    </UserLayout>
   );

}

export default Detail