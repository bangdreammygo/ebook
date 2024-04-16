import Item from "antd/es/list/Item";

// 获取图书信息的功能
async function getBook(idx){
    const res=await fetch("http://localhost:8888/data");
    const data=await res.json();
    const idxn=Number(idx);
    const bkif=data[idxn-1];
    return bkif;
};
//搜索图书的功能
const searchBook=async (bookname)=>{
    const res=await fetch("http://localhost:8888/data");
    const data=await res.json();
    const bookarr=data.filter((item)=>item.name.indexOf(bookname)!==-1);
    const arr=bookarr.map((item)=>item.id);
    return arr;
}


export {getBook,searchBook}