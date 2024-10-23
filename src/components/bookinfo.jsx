// 书籍详情的组件
import { Card, Divider, Space } from "antd";
import { Button, Col, Image, Row } from "antd";
import {  Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import { addcart } from "../service/cart";
import { ExclamationCircleOutlined,ReadOutlined,ShoppingCartOutlined ,BulbOutlined,GiftOutlined,QuestionCircleOutlined,MoneyCollectOutlined,InfoCircleOutlined} from '@ant-design/icons';
const { Title, Paragraph } = Typography;


const BookInfo=({children})=>{
    const nav=useNavigate();
    //  处理添加购物车
    const handleClick=async ()=>{
        const id =children.id;
        const data=await addcart(id);
        alert(data);
    } 
    //添加立即购买
    const handleBuy=async ()=>{
        const id =children.id;
        await addcart(id);
        nav("/cart");
    }

   //取到数据了过后填充
   return(
    //页面整体放入一个大的card内
     <Card style={{backgroundColor:"transparent", padding:"0px 10px",border:"none",marginTop:"50px"}}> 
        <br /><br />
       {/*布局展示图和右侧详情*/}
       <Row>
         <Col span={9}>
           <Image src={children.cover} width={500} height={500}  />
         </Col>
        <Col span={15} style={{
            backgroundColor:"rgba(41,36,33,0.7)",
            padding:"20px",
            borderRadius:"10px"
        }}>
         {/* 布局右边说明板块 */}
         <Typography>
           <Space>
           <ReadOutlined style={{color:"#ffb6c1",fontSize:"34px",marginBottom:"10px"}}></ReadOutlined>
           <Title style={{color:"white",fontSize:"32px"}}>{children.title}</Title>
           </Space>
           <Paragraph style={{color:"white", fontSize:"20px"}}><QuestionCircleOutlined  style={{color:"#6495ed",fontSize:"22px"}}>
            </QuestionCircleOutlined>  关于本书:</Paragraph>
           {/* 作者介绍区域 */}
           <Space>
                    <BulbOutlined style={{fontSize:"24px",color:"#ffff99",marginBottom:"10px"}} />
                    <Paragraph style={{color:"white"}}>
                        {`作者：${children.author}`}
                        <Divider type="vertical" />
                        {`库存剩余：${children.rest}`}
                    </Paragraph>
            </Space>
            
            {/* 作品简介区域 */}
            <Paragraph style={{color:"white", fontSize:"20px"}}><InfoCircleOutlined style={{color:"#ffb3e6"}}></InfoCircleOutlined> 作品简介</Paragraph>
            <Paragraph style={{color:"white"}}>{children.brief}</Paragraph>
            
            
            {/* 出售区域 */}
            <Space direction="vertical" size="large" style={{ width: "100%"}}>
                    <div style={{ backgroundColor: "transparent", padding: "20px", width: "100%",borderRadius:"8px" }}>
                        <Paragraph style={{ marginBottom: 0,color:"white", fontSize:"18px" }} type="secondary"><MoneyCollectOutlined
                        style={{
                            color:"#caebda",
                            fontSize:"28px",
                            marginTop:"10px"
                        }}></MoneyCollectOutlined> 限时售价</Paragraph>
                        {/* 价格 */}
                        <div><Space>
                            <div style={{ color: "#e6005c", fontSize: "16px" }}>¥</div>
                            <div style={{ color: "#e6005c", fontSize: "30px" }}>{children.price/100}</div>
                            <div style={{ color: "#e6005c", fontSize: "18px" }}>（7折）</div>
                        </Space>
                        </div>
                        {/* 抢购标语 */}
                        <Space>
                            <ExclamationCircleOutlined style={{color:"white"}} />
                            <Paragraph style={{ marginBottom: 0 ,color:"white"}} type="secondary">数量有限，先到先得</Paragraph>
                        </Space>
                    </div>
                    {/* 后续用来写事件的两个按钮 */}
                    <Space>
                        <Button size="large" onClick={handleClick}>加入购物车<ShoppingCartOutlined></ShoppingCartOutlined></Button>
                        <Button type="primary" size="large" onClick={handleBuy}>立即购买<GiftOutlined style={{color:"white"}}></GiftOutlined></Button>
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