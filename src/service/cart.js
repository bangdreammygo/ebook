//封装一个获取购物车的函数
async function getcart(){
    //获取token
    const token=sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/cart/get?token=${token}`,{credentials: "include",});
    const {data}=await res.json();
    return data;
};
// 添加购物车
async function addcart(ID){
    //获取token
    const token =sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/cart/add?token=${token}&bookid=${ID}`,{credentials: "include",});
    const {data}=await res.json();
    return data;
}
// 删除购物车
async function deletecart(id){
        //获取token
        const token =sessionStorage.getItem("token");
        const res=await fetch(`http://localhost:8080/cart/delete?token=${token}&bookid=${id}`,{credentials: "include",});
        const {data}=await res.json();
        return data;
}

async function buyCart(selectedItems){
    //获取token
    const token =sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/cart/buy?token=${token}`,
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
              },
            mode: 'cors',
            credentials: "include",
            body:JSON.stringify(selectedItems),
        }
    );
    const data=await res.json();
    return data;
}
const updateNum=async (bookid,newnum)=>{
    //获取token
    const token =sessionStorage.getItem("token");
    const res=await fetch(`http://localhost:8080/cart/update?token=${token}&bookid=${bookid}&num=${newnum}`,{credentials: "include",});
    const {data}=await res.json();
    return data;
}

export {getcart,buyCart,addcart,deletecart,updateNum};