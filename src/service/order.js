
//封装获取order的函数
async function getOrder(){
     //获取token
    const token =sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/order/get?token=${token}`);
    //解构出来数据
    const {data}=await res.json();
    return data;
 };

 export {getOrder};