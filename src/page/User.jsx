import { UserLayout } from "../components/layout";
import { Card, Divider, Space } from "antd";
import { Button, Col, Image, Row } from "antd";
import UserInfo from "../components/userinfo";
const Userpage=()=>{

    return (
        <UserLayout active={"user"}>
            <Card
            style={{
                width:"800px",
                margin:"60px auto",
                textAlign:"center",
                backgroundColor:"rgba(41,36,33,0.7)"
            }}
            >
                <UserInfo></UserInfo>
            </Card>
        </UserLayout>
    );
}


export default Userpage;