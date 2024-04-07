// 书籍详情的组件
import upload1 from "../uploads/uploads1.JPG";
import upload2 from "../uploads/uploads2.JPG";
import upload3 from "../uploads/uploads3.JPG";
import upload4 from "../uploads/uploads4.JPG";
import upload5 from "../uploads/uploads5.JPG";
import upload6 from "../uploads/uploads6.JPG";
import upload7 from "../uploads/uploads7.JPG";
import upload8 from "../uploads/uploads8.JPG";



import { useState ,useEffect } from "react";
import { Card, Divider, Pagination, Space, Tabs } from "antd";
import { Button, Col, Image, Row } from "antd";
import {  Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;


const BookInfo=({children})=>{
    const pics=[upload1,upload2,upload3,upload4,upload5,upload6,upload7,upload8];
    const [information,setInfo]=useState(
        {name:"",
        auther:"111",
        price:0,
        brief:"test"});
    async function getBook(idx){
        const res=await fetch("http://localhost:8888/data");
        const data=await res.json();
        const idxn=Number(idx);
        const bkif=data[idxn-1];
        console.log(bkif);
        setInfo(bkif);
    };
    useEffect(  ()=>{
       getBook(children);
    },[]);
 

   //取到数据了过后填充
   return(
     <Card style={{backgroundColor:"transparent", padding:"0px 10px"}}> 
        <br /><br />
       <Row>
         <Col span={9}>
           <Image src={pics[children-1]} width={500} height={500}  />
         </Col>
        <Col span={14}>
         {/* 布局右边说明板块 */}
         <Typography>
           <Title style={{color:"white"}}>{information.name}</Title>
           <Divider orientation="left" style={{color:"white"}}></Divider>
           <Paragraph style={{color:"white", fontSize:"20px"}}>关于本书</Paragraph>
           <Space>
                    <Paragraph style={{color:"white"}}>
                        {`作者：${information.auther}`}
                        <Divider type="vertical" />
                        {`销量：114514`}
                    </Paragraph>
            </Space>
            <Divider orientation="left" style={{color:"white"}}></Divider>
            <Paragraph style={{color:"white", fontSize:"20px"}}>作品简介</Paragraph>
            <Paragraph style={{color:"white"}}>{information.brief}</Paragraph>

            <Space direction="vertical" size="large" style={{ width: "100%"}}>
                    <div style={{ backgroundColor: "rgba(41,36,33,0.4)", padding: "20px", width: "100%",borderRadius:"8px" }}>
                        <Paragraph style={{ marginBottom: 0,color:"white" }} type="secondary">抢购价</Paragraph>
                        <div><Space>
                            <div style={{ color: "#FF3300", fontSize: "16px" }}>¥</div>
                            <div style={{ color: "#ff3300", fontSize: "30px" }}>{information.price / 100}</div>
                            <div style={{ color: "#ff3300", fontSize: "18px" }}>（7折）</div>
                        </Space>
                        </div>
                        <div>
                            <Space>
                                <div style={{
                                    backgroundColor: "#f48484",
                                    padding: "0px 4px 0px 4px",
                                    borderRadius: "5px",
                                    color: "white"
                                }}>店铺促销</div>
                                <Paragraph style={{ marginBottom: 0 ,color:"white"}} type="secondary">满¥18减¥1，满¥48减¥3，满¥98减¥5，满¥198减¥10</Paragraph>
                            </Space>
                        </div>
                        <Space>
                            <ExclamationCircleOutlined style={{color:"white"}} />
                            <Paragraph style={{ marginBottom: 0 ,color:"white"}} type="secondary">部分促销不可共享，请以购物车能享受的促销为准</Paragraph>
                        </Space>
                    </div>
                    {/* 后续用来写事件的两个按钮 */}
                    <Space>
                        <Button size="large">加入购物车</Button>
                        <Button type="primary" size="large">立即购买</Button>
                    </Space>
                </Space>

          </Typography>    
        </Col>  
     </Row>
     <br /><br />
     </Card>
   );


   
};

export default BookInfo;