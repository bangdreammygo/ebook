
//封装获取order的函数
async function getOrder(){
     //获取token
    const token =sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/order/get?token=${token}`,{credentials: "include",});
    //解构出来数据
    const {data}=await res.json();
    return data;
 };

//筛选日期的函数
const getOrderByDate=async (start,end)=>{
     //获取token
     const token =sessionStorage.getItem("token");
     //发送请求
     const res=await fetch(`http://localhost:8080/order/date?token=${token}&Start=${start}&End=${end}`,{credentials: "include",});
     //解构出来数据
     const {data}=await res.json();
     return data;
}

//筛选关键词的函数
const getOrderByName=async (keyword)=>{
          //获取token
          const token =sessionStorage.getItem("token");
          //发送请求
          const res=await fetch(`http://localhost:8080/order/name?token=${token}&keywords=${keyword}`,{credentials: "include",});
          //解构出来数据
          const {data}=await res.json();
          return data;
}


//双重筛选

const getOrderByDouble=async (start,end,keyword)=>{
          //获取token
          const token =sessionStorage.getItem("token");
          //发送请求
          const res=await fetch(`http://localhost:8080/order/double?token=${token}&Start=${start}&End=${end}&keyword=${keyword}`,{credentials: "include",});
          //解构出来数据
          const {data}=await res.json();
          return data;
}

//获取统计的函数
const getRank=async (start,end)=>{
     //获取token
     const token =sessionStorage.getItem("token");
     //发送请求
     const res=await fetch(`http://localhost:8080/order/rank?token=${token}&Start=${start}&End=${end}`,{credentials: "include",});
     //解构出来数据
     const {data}=await res.json();
     //再获取总消费
     const pres=await fetch(`http://localhost:8080/order/rank/pay?token=${token}&Start=${start}&End=${end}`,{credentials: "include",});
     const price=await pres.json();
     const pay=price.data;
     return {data:data,pay:pay};
}


 export {getOrder,getOrderByDate,getRank,getOrderByName,getOrderByDouble};