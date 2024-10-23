// 修改图书的界面
import WorkerLayout from "../components/workerlayout";
import { useSearchParams } from "react-router-dom";
import Modicard from "../components/Modicard";



const Modify=()=>{
    //    获取书籍id,传入子级组件来进行进一步渲染
    const [params]=useSearchParams();
    const id=params.get("id");

    return(
        <WorkerLayout>
            <Modicard bookid={id}></Modicard>
        </WorkerLayout>
    );
}




export default Modify;