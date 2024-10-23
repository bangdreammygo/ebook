// 展示所有书籍的table
import { Link } from "react-router-dom";
import { Button,Image,Table,Popconfirm  } from "antd";
import { useEffect, useState } from "react";
import {DeleteOutlined} from "@ant-design/icons";
import { delBooks } from "../service/book";

const Booktable=({books,refresh})=>{
    //删除书籍的id
    const [delid,setDelid]=useState(0);
    ///////////////////// 执行删除的回调函数
    const deleteBook=async ()=>{
        await delBooks(delid);
        alert("删除成功");
        //强制刷新页面？
        await refresh();
    }
    /////////////////////////////////////////////////////////

    //获取渲染的数据
    const [data,setData]=useState([]);
    //重新渲染数据
    useEffect(
        ()=>{
            setData(books);
        }
        ,[books]);
    //准备列表的格式
    const columns=[
    {
        title:"封面",
        dataIndex:"pic",
        key:"pic",
        render: (text,recoder,index)=>{return <Image src={recoder.cover} style={{height:"85px",width:"85px"}}></Image>}
    },   
    {
        title:"作者",
        dataIndex:"author",
        key:"author",
        render: (text,recoder,index)=>{return<div>{recoder.author}</div>}
    },  
    {
        title:"库存",
        dataIndex:"rest",
        key:"rest",
        render: (text,recoder,index)=>{return<div>{recoder.rest}</div>}
    }, 
    {
        title:"书名",
        dataIndex:"name",
        key:"name",
        render: (text,recoder,index)=>{return <div>{recoder.title}</div>}
    },
    {
        title:"ISBN编号",
        dataIndex:"isbn",
        key:"isbn",
        render: (text,{isbn},index)=>{return <div>{isbn}</div>}
    },
    {
        title:"操作",
        dataIndex:"del",
        key:"del",
        render: (text,recoder,index)=>{return <Popconfirm
            title="Delete the book"
            description="Are you sure to delete this book?"
            /////////////////////////////////////////////到时候写回调即可
            onConfirm={deleteBook}
            /////////////////////////////////////////////////////////////
            okText="Yes"
            cancelText="No"
        ><Button  type="primary" onClick={()=>{setDelid(recoder.id);}}><DeleteOutlined></DeleteOutlined> 删除</Button></Popconfirm>}
    },
    {
        title:"编辑修改",
        dataIndex:"modify",
        key:"modify",
        render: (text,recoder,index)=>{return <Link to={`/modi?id=${recoder.id}`}>修改</Link>}
    }
   ]

   return(
    <Table
        columns={columns}
        dataSource={data.map(item => ({
            ...item,
            key:item.id
        }))}
        />
   );
}

export default Booktable;