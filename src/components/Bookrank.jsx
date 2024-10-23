import { Table,Image } from "antd";



const Bookranker=({data})=>{

    const columns = [
        { title: '封面', dataIndex: 'cover', key: 'cover',
          render:(text,recorder,index)=>{ return<Image src={recorder.book.cover} style={{height:"85px",width:"85px"}}></Image> }
        },
        { title: '书名', dataIndex: 'name', key: 'name',
          render:(text,recorder,index)=>{   return <div>{recorder.book.title}</div> }
        },
        { title: '销量', dataIndex: 'num', key: 'num',
        render:(text,recorder,index)=>{   return <div>{recorder.num}</div> }
        },
        { title: '当前售价', dataIndex: 'price', key: 'price',
            render:(text,recorder,index)=>{ return<div>{recorder.book.price/100}元</div> }
        },
        { title: '剩余库存', dataIndex: 'rest', key: 'rest',
            render:(text,recorder,index)=>{
                if(recorder.book.del===0)
                {console.log(recorder.book);;return <div>{recorder.book.rest}</div>}
                else
                {return <div>该书籍已下架！</div>}
            }
        }
    ];


    return <Table
    columns={columns}
    dataSource={data.map(item => ({
        ...item,
        key: item.book.id
    }))}
/>

}

export default Bookranker;