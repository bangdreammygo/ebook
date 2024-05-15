// 获取当前用户相关信息
import { request } from "../utils/request";
const getUser=async ()=>{
    const token=sessionStorage.getItem("token");
    const res=await request.get(`/user/info?token=${token}`);
    const {data}=await res.data;
    console.log(res.data);
    return data;
}
//向后端发送更改签名的请求
const postMotto=async (Motto)=>{
    console.log(Motto);
    const token=sessionStorage.getItem("token");
    const res=await request.get(`/user/motto?token=${token}&motto=${Motto}`);
    const {data}=res.data;
    console.log(res.data);
    return data;
}


export default getUser;
export {postMotto}