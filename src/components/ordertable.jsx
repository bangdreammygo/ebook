// 整个订单列表的组件
import { Table } from "antd";
import OrderItemList from "./orderitemlist";
const Ordertable=({children})=>{
    const moment=require("moment");


    const columns = [
        { title: '收货人', dataIndex: 'receiver', key: 'receiver',
          render:(text,recorder,index)=>{  return <div>{recorder.receiver}</div> }
        },
        { title: '联系方式', dataIndex: 'tel', key: 'tel',
          render:(text,recorder,index)=>{   return <div>{recorder.phone}</div> }
        },
        { title: '收货地址', dataIndex: 'address', key: 'address',
        render:(text,recorder,index)=>{   return <div>{recorder.address}</div> }
        },
        {
            title: '下单时间', dataIndex: 'createdAt', key: 'createdAt',
            render:(text,recorder,index)=>{ const dateString=recorder.orderdate; const formattedDate = moment(dateString).format('YYYY-MM-DD HH:mm:ss');return <div>{formattedDate}</div> }
        },
    ];



    return <Table
    columns={columns}
    dataSource={children.map(item => ({
        ...item,
        key: item.orderid
    }))}
    expandable={{
        expandedRowRender:(order)=>{
        return<OrderItemList  orderitems={order.books}></OrderItemList>
        }
    }}
/>

};

export default Ordertable;