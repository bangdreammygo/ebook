//booklist组件，用于放置书籍
import "../css/base.module.css"
import Bookcard from "./bookcard";
import  style from  "../css/booklist.module.css"
import { List, Pagination} from "antd"


const Booklist=({ book, pageSize, current, total, onPageChange })=>{
    return(
        <div className={style.goods}>

             {/*list渲染书籍*/}
            <List
            grid={{
                gutter: 16, column: 5
            }}
            dataSource={
                book.map(b => ({
                    ...b,
                    key: b.id
                }))
            }
            renderItem={(item) => (
                <List.Item>
                    <Bookcard key={item.key}>{item}</Bookcard>
                </List.Item>
            )}
        />
             <br />
             {/* 分页器s*/}
            <Pagination  current={current} pageSize={pageSize}
            onChange={onPageChange} total={total} />
        </div>
    );
};



export default Booklist;