import { Link } from "react-router-dom";
import { Button, Col, Image, Row, Table, InputNumber } from "antd";
import { useEffect, useState } from "react";
import {DeleteOutlined} from "@ant-design/icons";
import src from "../uploads/uploads1.JPG";
import OrderModal from "./orderModal";
const CartItemTable=({children,init})=>{

    //提交订单后重新会渲染
    const [data,setData]=useState(children);
    useEffect(
        ()=>{
            setData(children);
        }
        ,[children]);


    /////////////////////////////////////////处理购物车内增加数量的情况//////////////
    const handleCartchange=(id,num)=>{
    
    }
    ///////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////处理删除的逻辑///////////////////////////////////////////////
    const  handleDeleteItem=(item)=>{
       alert(`删除书籍：${item.book.name}`);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    


    ////////////////////////显示的总价//////////////////////////////////////
    const [totalPrice,setPrice]=useState(0);

    ////////////////////////////////////购物车中被选中的项////////////////////////////////////////
    const [selectItems,setSelect]=useState([]);
    
    /////////////////////////////////////返回类型的样式：
    /////////{
    ////////  id:    ---对应的用户的id号，说明是某用户的购物车
    ///////   number:   -------对应这本书有多少本
    ///////   book:{
    //////           id: ----书籍id
    //////           author:  ----作者
    //////           price:  ------价格
    //////           rest:   -----库存
    //////           brief: ------书籍简介
    //////           }
    ///////        }
  
  /////////////////////////////////////////////选中时处理回调的逻辑///////////////////////////////////////////
  const handleSelect=(selects)=>{
    //记录新的总价
    let num=0;
    //获取所有的选项！
    const selectforend=selects.map((item)=>{
        num+=(item.book.price*item.num);
        return{
        id:item.id,
        book:item.book,
        num:item.num
    }});
    //此处已经获取到了所有的选中的项信息
    //将选中的情况设置进数组里，最后向后端返回也是返回这个
    setSelect(selectforend);
    console.log(selectforend);
    //重新设置总价显示
    setPrice(num);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////用来渲染购物车table的样式////////////////////////////////
     const columns=[
        {
            title:"封面",
            dataIndex:"pic",
            key:"pic",
            render:(text,{book},index)=>{return<Image src={src}></Image>}
        },
        {
            title:"书名",
            dataIndex:"name",
            key:"name",
            render: (text,recoder,index)=>{return<Link to={`/book?idx=${recoder.book.id}`} style={{fontSize:"20px",fontWeight:700}}>{recoder.book.name}</Link>}
        },
        {
            title:"数量",
            dataIndex:"num",
            key:"num",
            render:(text,recoder,index)=><InputNumber defaultValue={recoder.num}  min={1} onChange={(newnum)=>{handleCartchange(recoder.id,newnum);}} ></InputNumber>
        },
        {
            title: '价格',
            dataIndex: 'price',
            key:"price",
            render: (text,recoder,index) =>(recoder.book.price)
        },
        {
            title: '操作',
            dataIndex: '',
            render: (text,item,idx) => <Button type="primary" onClick={() => {
                handleDeleteItem(item);
            }}><DeleteOutlined></DeleteOutlined> 删除</Button>,
        }
     ];
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
     ///////////////////////////////////处理订单提交的逻辑////////////////////////////

     const handleClick=()=>{
        console.log(selectItems);
        setShowModal(true);
     }
     const closeModal=()=>{
        setShowModal(false);
     }
     const initCartAgain=()=>{
        setShowModal(false);
        setPrice(0);
        //置空选中列表
        setSelect([]);
        init();
     }
     ////////////////////////////////////////////////////////////////////////////////

    
     ////////////////////////控制表格是否显示/////////////////
     const[showModal,setShowModal]=useState(false);
    
     ///////////////////////////////////////////////////////


     return (
        <>
        {/* 提交订单后会生成的对话框 */}
        {showModal&&<OrderModal onCancel={closeModal} selectedItems={selectItems} onOk={initCartAgain} destoryOnclose ></OrderModal>}
        
        {/* 渲染购物车 */}
        <Table
        columns={columns}
        ///////////////////////////////////////////当某一行选中时触发的回调////////////////////////
        rowSelection={{
            onChange:(selectedrowkeys,selectedrows,info)=>{handleSelect(selectedrows);}
        }}
        //////////////////////////////////////////////////////////////////////////////////////
        expandable={{
            expandedRowRender: (data) => (
                <Row justify={"space-between"} gutter={8}>
                    <Col span={3}>
                        <Image src={src} height={200} />
                    </Col>
                    <Col span={21}>
                        <p>{data.book.brief}</p>
                    </Col>
                </Row>
            ),
        }}
        dataSource={data.map(item => ({
            img:src,
            ...item,
            key: (item.id+item.book.id)
        }))}
        />

        {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\计算价格的标签位置/////////////////////////////////////////////////////// */}
        <p 
        style={{
            display:"block",
            width:"200px",
            height:"40px",
            lineHeight:"40px",
            textAlign:"center",
            fontSize:"16px",
            fontWeight:"700"
            }}
        >总价：{totalPrice}元</p>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////// */}
            <br />



        
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\向后端提交申请的位置/////////////////////////////////////////////////////////////// */}
        <Button type="primary" 
          onClick={()=>{handleClick();}}
        >立刻下单</Button>
        </>
     );

}

export default CartItemTable;