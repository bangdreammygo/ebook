// 获取当前用户相关信息

const getUser=async ()=>{
    const res=await fetch("http://localhost:8080/login/user");
    const data=await res.json();
    return data;
}


export default getUser;