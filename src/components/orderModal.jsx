// 提交购物车时的框框
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import useMessage from "antd/es/message/useMessage";
import { buyCart } from "../service/cart";
import _ from "lodash";
const { TextArea } = Input;

const OrderModal=({
    selectedItems,
    onOk,
    onCancel,
    refresh,
    clear})=>{
    
    //处理错误信息
    const [messageApi, contextHolder] = useMessage();


    //////////////////////////////////////////////////////防抖提交/////////////////////////////////////////////////////
    let debouncedPutCart; // 防抖的 putCart 函数  
    // 初始化防抖函数  
    function initDebouncedPutCart() {  
        debouncedPutCart = _.debounce(async (orderInfo) => {  
            try {  
                const data = await buyCart(orderInfo);  
                if (data.code === 200) {  
                    await messageApi.success(data.data, 0.8);  
                } 
                else {  
                    //出现问题，那么把选中列表清空！
                    await messageApi.error(data.data, 0.8); 
                    clear(); 
                }  
                await refresh(); 
                onOk(); // 如果需要的话，可以在这里调用 onOk  
            } catch (error) {  
                console.error('请求失败:', error);  
                messageApi.error('请求失败，请稍后再试！');  
            }  
        }, 800); // 设置防抖时间
    }  
      
    // 初始化防抖函数（只在程序开始时执行一次）  
    initDebouncedPutCart();  
      
    const handleSubmit = async ({ address, receiver, tel }) => {  
        if (!address || !receiver || !tel) {  
            messageApi.error("请填写完整信息！");  
            return;  
        }  
        let orderInfo = {  
            books:selectedItems,
            receiver:receiver,
            address:address,
            phone:tel,
        };  
        console.log("订单信息：",orderInfo);
        // 调用防抖函数  
        await debouncedPutCart(orderInfo);
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        return (
            <Modal
                title={"确认下单"}
                open
                onOk={onOk}
                onCancel={onCancel}
                footer={null}
                width={800}
            >
                {contextHolder}
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    preserve={false}
                >
                    <Form.Item
                        name="receiver"
                        label="收货人"
                        required
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="tel"
                        label="联系电话"
                        required
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="收货地址"
                        required
                    >
                        <TextArea rows={2} maxLength={817} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
}


export default OrderModal;