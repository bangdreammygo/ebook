// 这个文件里封装检测登陆的逻辑
import { request } from "../utils/request";


//检查登录状态
//传参token
//后端解析token，如果检查结果无误则返回
async function checkLogin(){
    //获取当前token
   const token=sessionStorage.getItem("token");
   if(token===null)return false;
   //向后端查看token是否跨可以正常解析
   const checkstate=await request.get(`/login/check?token=${token}`);
   const {code}=checkstate.data;
   if(code!==200)return false;
   return true;
}

//设置登录后的用户状态
//将token设置到本地
async function setLogin(username,password){
    const setLogin=await request.get(`/login/setinfo?username=${username}&password=${password}`);
    //获取到了结果
    const {code,data}=setLogin.data;
    if(code===200) {sessionStorage.setItem("token",data);return true}
    else return false;
}


//清除token
function logout(){
     sessionStorage.removeItem("token");
     return;
}

export {checkLogin,setLogin,logout};