
//检查登录状态
//传参token
//后端解析token，如果检查结果无误则返回
async function checkLogin(){
    //获取当前token
   const token=sessionStorage.getItem("token");
   if(token===null)return false;
   //向后端查看token是否跨可以正常解析
   const checkstate1=await fetch(`http://localhost:8080/login/check?token=${token}`,{credentials: "include",});
   const checkstate=await checkstate1.json();
   const {code}=checkstate;
   if(code!==200)return false;
   return true;
}
// 校验是不是管理员
async function checkWorker(){
    //获取当前token
   const token=sessionStorage.getItem("token");
   if(token===null)return false;
   //校验是不是管理员
   const res=await fetch(`http://localhost:8080/login/worker?token=${token}`,{credentials: "include",});
   const data= await res.json();
   const isWorker=data.data;
   return isWorker;
}

//设置登录后的用户状态
//将token设置到本地
async function setLogin(username,password){
    const setLogin1=await fetch(`http://localhost:8080/login/setinfo?username=${username}&password=${password}`,{credentials: "include",});
    //获取到了结果
    const setLogin=await setLogin1.json();
    const {code,data}=setLogin;
    if(code===200||code===222) {sessionStorage.setItem("token",data);return {res:true,code:code}}
    else return {res:false,code:code};
}


//清除token
async function logout(){
     sessionStorage.removeItem("token");
     const data =await fetch("http://localhost:8080/login/logout",{credentials: "include",});
     const time=await data.json();
     return time.data ;
}


//注册
export const register=async (username,password)=>{
    const user={
        username:username,
        password:password
    }
    console.log(JSON.stringify(user));
    const res = await fetch("http://localhost:8080/login/reg",{
        method:"post",
        mode:"cors",
        headers:{
          "Content-Type": "application/json"
        },
        credentials: "include",
        body:JSON.stringify(user),
    });
    const data=await res.json();
    return data;
}



export {checkLogin,setLogin,logout,checkWorker};