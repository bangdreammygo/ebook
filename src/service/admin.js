//获取全部的用户信息
export async function getUsers() {
    const res = await fetch(`http://localhost:8080/admin/all/user`, {
        method: "GET",
        mode: "cors",
        credentials:"include"
    });

    const data = await res.json();
    if (data.code === 404) {
        return [];
    }
    return data.data;
}

//封禁/解封用户
export const banUser = async (data) => {
    const res = await fetch(`http://localhost:8080/admin/user/${data.ban?"lock":"unlock"}?userid=${data.id}`, {
        method: "GET",
        mode: "cors",
        credentials:"include"
    });
    const result = await res.json();
    if (result.code === 404) {
        return false;
    }
    return true;
}


// 获取所有的订单信息

export const getAllOrder=async ()=>{
    const res=await fetch("http://localhost:8080/admin/order/all",{credentials: "include",});
    const data=await res.json();
    return data.data;
}

// 按照时间进行过滤

export const getDateOrder=async (start,end)=>{
        //发送请求
        const res=await fetch(`http://localhost:8080/admin/order/date?Start=${start}&End=${end}`,{credentials: "include",});
        //解构出来数据
        const {data}=await res.json();
        return data;
}

//按照关键字进行过滤
export const getKeyOrder=async (keywords)=>{
        //发送请求
        const res=await fetch(`http://localhost:8080/admin/order/key?keywords=${keywords}`,{credentials: "include",});
        //解构出来数据
        const {data}=await res.json();
        return data;
}

//多重搜索
export const getDoubleOrder=async (start,end,keyword)=>{
         //发送请求
         const res=await fetch(`http://localhost:8080/admin/order/double?Start=${start}&End=${end}&keyword=${keyword}`,{credentials: "include",});
         //解构出来数据
         const {data}=await res.json();
         return data;
}

//获取购买情况

export const getBuysAll=async()=>{
    const res=await fetch("http://localhost:8080/admin/rank/user/no",{credentials: "include",});
    const {data}=await res.json();
    return data;
}

export const getBuysDate=async(start,end)=>{
    const res=await fetch(`http://localhost:8080/admin/rank/user/yes?Start=${start}&End=${end}`,{credentials: "include",});
    const {data}=await res.json();
    return data;
}


//获取书籍销售情况

export const getSaleAll=async()=>{
    const res=await fetch("http://localhost:8080/admin/rank/book/no",{credentials: "include",});
    const {data}=await res.json();
    return data;
}

export const getSaleDate=async(start ,end)=>{
    const res=await fetch(`http://localhost:8080/admin/rank/book/yes?Start=${start}&End=${end}`,{credentials: "include",});
    const {data}=await res.json();
    return data;
}

// 新增书籍(管理员使用)
export const addBook=async (book,num)=>{
    const res=await fetch (`http://localhost:8080/book/add?num=${num}`,
    {
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(book),
        credentials:"include",
        mode:"cors"
    }
    )
    const data=await res.json();
    return data.data;
}