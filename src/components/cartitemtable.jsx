import { Link } from "react-router-dom";
import { Button, Col, Image, Row, Table, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import src from "../uploads/uploads1.JPG"
const CartItemTable=({children})=>{
    //处理购物车内增加数量的情况
    const handleCartchange=(id,num)=>{
    
    }
    const  handleDeleteItem=(id)=>{
       console.log(children[0].price);
    }
    const data=children.map(item=>{
       return item
    });
    //先准备一下假数据吧
     const columns=[
        {
            title:"封面",
            dataIndex:"pic",
            key:"pic",
            render:(text,{img},index)=>{return<Image src={img}></Image>}
        },
        {
            title:"书名",
            dataIndex:"name",
            key:"name",
            render: (text,recoder,index)=>{return<Link to={`/book?idx=${recoder.id}`} style={{fontSize:"20px",fontWeight:700}}>{recoder.name}</Link>}
        },
        {
            title:"数量",
            dataIndex:"num",
            key:"num",
            render:book=><InputNumber defaultValue={1}  min={1} onChange={(newnum)=>{handleCartchange(book.id,newnum);}} ></InputNumber>
        },
        {
            title: '价格',
            dataIndex: 'price',
            key:"price",
            render: (text,recoder,index) =>(recoder.price / 100)
        },
        {
            title: '操作',
            dataIndex: '',
            render: (item) => <Button type="primary" onClick={() => {
                handleDeleteItem(item.id);
            }}>删除</Button>,
        }
     ];
     console.log(data.map(item => ({
        img:src,
        ...item,
        key: item.id
    })));
     return (
        <Table
        columns={columns}
        rowSelection={{}}
        expandable={{
            expandedRowRender: (data) => (
                <Row justify={"space-between"} gutter={8}>
                    <Col span={3}>
                        <Image src={src} height={200} />
                    </Col>
                    <Col span={21}>
                        <p>{data.brief}</p>
                    </Col>
                </Row>
            ),
        }}
        dataSource={data.map(item => ({
            img:src,
            ...item,
            key: item.id
        }))}
        />
     );

}

export default CartItemTable;