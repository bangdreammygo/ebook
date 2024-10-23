//搜索图书的功能
const searchBook=async (keyword, pageIndex, pageSize)=>{
    const res=await fetch(`http://localhost:8080/book/get?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`,{credentials: "include",});
    const data=await res.json();
    const books=data.data;
    console.log(books);
    return books
}
const getBookById=async (id)=>{
    const res=await fetch(`http://localhost:8080/book/detail?id=${id}`,{credentials: "include",method:"GET"});
    const data=await res.json();
    const total=data.data;
    return total
}

const getAllBooks=async ()=>{
    const res= await fetch("http://localhost:8080/book/all",{credentials: "include"});
    const data=await res.json();
    const total=data.data;
    console.log("所有书籍：",total);
    return total;
}

// 管理员搜索关键词

const searchKey=async (keyword)=>{
    const res=await fetch(`http://localhost:8080/book/search?keyword=${keyword}`,{credentials: "include",});
    const data= await res.json();
    const books=data.data;
    return books;
}


// 删除图书的功能（管理员使用）
const delBooks=async(id)=>{
    const res= await fetch(`http://localhost:8080/book/del?id=${id}`);
    const data= await res.json();
    return data.data;
}



// 新增书籍(管理员使用)
const addBook=async (book,num)=>{
    const res=await fetch (`http://localhost:8080/book/add?num=${num}`,
    {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
          },
        mode: 'cors',
        credentials: "include",
        body:JSON.stringify(book),
    }
    )
    const data=await res.json();
    return data.data;
}

export {searchBook,getBookById,getAllBooks,delBooks,searchKey,addBook}