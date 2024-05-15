//搜索图书的功能
const searchBook=async (keyword, pageIndex, pageSize)=>{
    const res=await fetch(`http://localhost:8080/book/get?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
    const data=await res.json();
    const books=data.data;
    console.log(books);
    return books
}
const getBookById=async (id)=>{
    const res=await fetch(`http://localhost:8080/book/detail?id=${id}`);
    const data=await res.json();
    const total=data.data;
    return total
}


export {searchBook,getBookById}