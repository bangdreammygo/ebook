
//封装获取order的函数
async function getOrder(){
    const res=await fetch("http://localhost:8080/order/get?id=114514");
    const data=await res.json();
    return data;
 };

 export {getOrder};