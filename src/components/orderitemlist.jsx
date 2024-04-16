// 订单的扩展项
import { List, Avatar } from "antd"
const OrderItemList=({orderitems,src})=>{
    return <List
        dataSource={orderitems}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar shape="square" size={80} src={src} />}
                    title={item.book.title}
                    description={`数量：${item.number}`}
                />
            </List.Item>
        )}
    />

};


export default OrderItemList;