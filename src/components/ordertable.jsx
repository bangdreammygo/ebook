// 整个订单列表的组件
import { render } from "@testing-library/react";
import { Table } from "antd";
import OrderItemList from "./orderitemlist";
import src from "../uploads/uploads1.JPG"
const Ordertable=({children})=>{
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
            render:(text,recorder,index)=>{   return <div>{recorder.date}</div> }
        },
    ];



    return <Table
    columns={columns}
    dataSource={children.map(item => ({
        ...item,
        key: item.id
    }))}
    expandable={{
        expandedRowRender:(order)=>{
        return<OrderItemList  orderitems={order.items} src={src}></OrderItemList>
        }
    }}
/>

};

export default Ordertable;