// 管理员添加新书的页面
import WorkerLayout from "../components/workerlayout";
import Addcard from "../components/Addcard";
const Add=()=>{


    return(
        <WorkerLayout active={"add"}>
            <Addcard></Addcard>
        </WorkerLayout>
    );
}

export default Add;