// header组件负责渲染头部
import "../css/base.module.css";
import { Header } from "antd/es/layout/layout";
import Navbar from "./workernav";
const WorkerHeader=({children,active})=>{
   return(
    <Header style={{
        position:'fixed',
        top: 0,
        zIndex: 2,
        width: '100%',
      }}>
      <Navbar active={active}>{children}</Navbar>
    </Header>
   );
};


export default WorkerHeader;