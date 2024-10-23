// 获取当前用户相关信息
const getUser=async ()=>{
    const token=sessionStorage.getItem("token");
    console.log("当前token",token);
    if(token===null){
        return {
            username:"五条悟",
            money:0,
            motto:"你所热爱的"
        }
    }
    const res=await fetch(`http://localhost:8080/user/info?token=${token}`,{credentials: "include"});
    const res2=await res.json();
    const {data}=res2;
    console.log(res.data);
    return data;
}
//向后端发送更改签名的请求
const postMotto=async (Motto)=>{
    const token=sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/user/motto?token=${token}&motto=${Motto}`,{credentials: "include"});
    const res2=await res.json();
    const {data}=res2;
    return data;
}


export default getUser;
export {postMotto}