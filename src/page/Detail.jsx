// 书籍详情页面
import { useSearchParams } from "react-router-dom";
import { UserLayout } from "../components/layout";
import BookInfo from "../components/bookinfo";
const Detail=()=>{
  //获取
   const [params]=useSearchParams();
   const idx=params.get("idx");
   return (
    <UserLayout active={null}>
        <BookInfo>{idx}</BookInfo>   
    </UserLayout>
   );

}

export default Detail