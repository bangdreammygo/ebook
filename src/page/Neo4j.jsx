import { Input } from 'antd';
import Booklist from "../components/booklist";
import { UserLayout } from "../components/layout";
import { Card, Space } from "antd";
import { useEffect, useState } from 'react';
import { tagSearch} from '../service/book';
import { useSearchParams } from 'react-router-dom';
const { Search } = Input;
const NeoPage=()=>{  
    const [searchParams,setSearchParams] = useSearchParams();
    //所有的书籍
    const [books,setBooks]=useState([]);
    //页面大小
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 10;
    // 搜索所需要的keyword
    const tag = searchParams.get("tag") || "";
    const [totalPage, setTotalPage] = useState(0);
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 1;
    //获取书籍信息(后端根据有无keyword分别调用!)
    const getBooks = async () => {
        const {allBooks,total} = await tagSearch(tag, pageIndex, pageSize);
        console.log(total);
        setBooks(allBooks);
        setTotalPage(total);
    };
   //处理搜索事件
    const handleSearch = (tag) => {
        setSearchParams({
            "tag": tag,
            "pageIndex": 1,
            "pageSize": 10
        });
    };
    // 处理翻页逻辑
    const handlePageChange = (page,pagesize) => {
         // 使用函数形式，以便访问当前的searchParams  
        setSearchParams(prevSearchParams => {  
        // 创建一个新的 URLSearchParams 对象，基于现有的参数  
        const newParams = new URLSearchParams(prevSearchParams);  
        // 更新 pageIndex  
        newParams.set('pageIndex', page.toString());  
        // 保持其他参数不变  
        return newParams;  
    });  
    }
    //渲染页面
    useEffect(() => {
        getBooks();
    }, [tag, pageIndex, pageSize])
    //返回组件
    return(
     <UserLayout active="neo">
        <Card className="cardContainer"  style={{backgroundColor:"transparent" , borderRadius:"0px",border:"none"}}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Search placeholder="输入要查询的内容"  enterButton size="large" style={{padding:"0px 50px",marginTop:"20px"}}
                defaultValue={""}
                allowClear
                onSearch={handleSearch}
                />
                <Booklist book={books} pageSize={pageSize} total={totalPage*pageSize} current={pageIndex} onPageChange={handlePageChange} ></Booklist>
            </Space>
        </Card>
     </UserLayout>
    );
};
export default NeoPage;