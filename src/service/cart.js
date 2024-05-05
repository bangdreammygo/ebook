//封装一个获取购物车的函数
async function getcart(){
    const res=await fetch("http://localhost:8080/cart/get");
    const data=await res.json();
    return data;
};

async function putCart(selectedItems){
    const info={
        method:"PUT",
        body:JSON.stringify(selectedItems),
        mode: 'cors',
        headers:{
          "Content-Type": "application/json"
        },
    };
    const res=await fetch("http://localhost:8080/cart/put",
     info
    );
    const data=await res.json();
    console.log(data);
    return data;
}


export {getcart,putCart};