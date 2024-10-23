import { Link } from "react-router-dom";
import { Button, Col, Image, Row, Table, InputNumber } from "antd";
import { useEffect, useState } from "react";
import {DeleteOutlined} from "@ant-design/icons";
import OrderModal from "./orderModal";
import { deletecart,getcart,updateNum } from "../service/cart";
import useMessage from "antd/es/message/useMessage";

const CartItemTable=({children,init})=>{
    ////////////////////////////////////购物车中被选中的项////////////////////////////////////////
    const [selectItems,setSelect]=useState([]);
    ////////////////////////显示的总价//////////////////////////////////////
    const [totalPrice,setPrice]=useState(0);
    //处理错误信息
    const [messageApi, contextHolder] = useMessage();
    const [socket, setSocket] = useState(null);

    //提交订单后重新会渲染
    const [data,setData]=useState(children);
    useEffect(
        ()=>{
            setData(children);
        }
        ,[children]);

    //清空选项列表：
    const clearSelect=()=>{
        setSelect([]);
    }
    /////////////////////////////////////////处理购物车内增加数量的情况//////////////
    const handleCartchange=async (id,newnum)=>{
        //获取到了书籍的id、书籍的新数目
        //更新后端数据库
        await updateNum(id,newnum);
        //刷新
        await refresh();
        //重新修改选中的情况
        const selectforend=selectItems.map((item)=>{
            if(item.book.id!==id) 
             {
              return{
              book:item.book,
              num:item.num
              }
             } 
            else{
                return{
                    book:item.book,
                    num: newnum
                }
            }
        });
        setSelect(selectforend);
    }
    //更新价格显示
    useEffect(
        ()=>{//重新计算总价
        let newprice=0;
        for(let i=0;i<selectItems.length;i++){
            newprice+=selectItems[i].book.price*selectItems[i].num;
        }
        setPrice(newprice);
        }
        ,[selectItems]);
    ///////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////处理删除的逻辑///////////////////////////////////////////////
    const  handleDeleteItem=async(item)=>{
        const msg=await deletecart(item.book.id);
        alert(msg);
        const newcart=await getcart();
        setData(newcart);
        //还要更新select序列
        const selectforend=selectItems.filter((sitem)=>sitem.book.id!==item.book.id);
        setSelect(selectforend);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    
    // 建立 WebSocket 连接
    const token = sessionStorage.getItem("token"); // 替换为实际的用户ID
    const socketUrl = `ws://localhost:8080/transfer/${token}`;
    let newSocket ;
    
    /////////////////////////////////////返回类型的样式：
    /////////{
    ///////   num:   -------对应这本书有多少本
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
    let nums=0;
    //获取所有的选项！
    const selectforend=selects.map((item)=>{
        nums+=(item.book.price*item.num);
        return{
        book:item.book,
        num:item.num
    }});
    //此处已经获取到了所有的选中的项信息
    //将选中的情况设置进数组里，最后向后端返回也是返回这个
    setSelect(selectforend);
    //重新设置总价显示
    setPrice(nums);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////用来渲染购物车table的样式////////////////////////////////
     const columns=[
        {
            title:"封面",
            dataIndex:"pic",
            key:"pic",
            render:(text,{book},index)=>{return<Image src={book.cover} style={{height:"85px",width:"85px"}}></Image>}
        },
        {
            title:"书名",
            dataIndex:"name",
            key:"name",
            render: (text,recoder,index)=>{return<Link to={`/book?idx=${recoder.book.id}`} style={{fontSize:"20px",fontWeight:700}}>{recoder.book.title}</Link>}
        },
        {
            title:"数量",
            dataIndex:"num",
            key:"num",
            render:(text,recoder,index)=><InputNumber defaultValue={recoder.num}  min={1} onChange={(newnum)=>{handleCartchange(recoder.book.id,newnum);}} ></InputNumber>
        },
        {
            title: '价格',
            dataIndex: 'price',
            key:"price",
            render: (text,recoder,index) =>(recoder.book.price/100)
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

     const handleClick=async ()=>{
        //建立websocket连接
        if(selectItems.length!==0){
            newSocket=new WebSocket(socketUrl);
            newSocket.onmessage =async (event) => {
                const message = event.data;
                setTimeout(async () => {
                    if(message.length===8)await messageApi.success(message, 0.8);
                    else await messageApi.error(message,0.8); 
                    // 关闭 WebSocket 连接
                    if (newSocket && newSocket.readyState === WebSocket.OPEN) {  
                        newSocket.close();  
                    }  
                }, 400); 
            };
            newSocket.onerror = async(error) => {
                console.error('WebSocket error:', error);
                await messageApi.error('WebSocket连接失败，请稍后再试！');
            };
            setSocket(newSocket);
            setShowModal(true);
        }
        else alert("您还没有选中任何商品");
     }
     
     useEffect(() => {
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [socket]); 
     

     const closeModal=()=>{
        setShowModal(false);        
        setTimeout(()=>{        
            if (socket && socket.readyState === socket.OPEN) {  
            socket.close();  
        } },2000); 
     }
     const initCartAgain=()=>{
        setShowModal(false);
        setPrice(0);
        //置空选中列表
        setSelect([]);
        init();
     }
    // /////////////////////////////////刷新页面的函数
    const refresh=async()=>{
        const newcart=await getcart();
        setData(newcart);
    }
    

     ////////////////////////////////////////////////////////////////////////////////

    
     ////////////////////////控制表格是否显示/////////////////
     const[showModal,setShowModal]=useState(false);
    
     ///////////////////////////////////////////////////////


     return (
        <>
        {/* 提交订单后会生成的对话框 */}
        {showModal&&<OrderModal onCancel={closeModal} selectedItems={selectItems} onOk={initCartAgain} destoryOnclose refresh={refresh} clear={clearSelect}></OrderModal>}
        {contextHolder}
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
                        <Image src={data.book.cover} height={200} />
                    </Col>
                    <Col span={21}>
                        <p>{data.book.brief}</p>
                    </Col>
                </Row>
            ),
        }}
        dataSource={data.map(item => ({
            ...item,
            key:item.book.id
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
        >总价：{totalPrice/100}元</p>
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