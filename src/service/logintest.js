// 这个文件里封装检测登陆与否的函数逻辑

async function checkLogin(){
    const res=await fetch("http://localhost:8080/login/check");
    const data=await res.text();
    console.log(typeof data);
    const state=parseInt(data,10);
    if(state===1)return true;
    else return false;
}

//设置登录后的用户状态
async function setLogin(username,password){
    const user={
        username:username,
        password:password
    };
    const setLogin=await fetch("http://localhost:8080/login/setinfo",
    {
        method:"post",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    });
    if(setLogin) return true;
}


//退出登录清空信息
async function logout(){
     await fetch("http://localhost:8080/login/logout");
     return;
}

export {checkLogin,setLogin,logout};