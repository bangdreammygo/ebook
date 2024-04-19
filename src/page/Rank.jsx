import { UserLayout } from "../components/layout";
import  Chart  from "../components/chart";
import { Card } from "antd";
const Rank=()=>{
    
   return(
    <UserLayout active={"rank"}>
        <Card
        style={{
            marginTop:"30px",
            textAlign:"center",
            border:"none",
            backgroundColor:"transparent"
        }}
        
        >
            <Chart></Chart>
        </Card>
    </UserLayout>
   );
};


export default Rank;