//封装一个获取购物车的函数
async function getcart(){
    const res=await fetch("http://localhost:8888/data");
    const data=await res.json();
    return data;
};



export {getcart};