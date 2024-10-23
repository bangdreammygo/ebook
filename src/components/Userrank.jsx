import { Table } from "antd";

const Userrank=({userdata})=>{


    const columns = [
        { title: '用户id', dataIndex: 'userid', key: 'userid',
          render:(text,recorder,index)=>{  return <div>{recorder.id}</div> }
        },
        { title: '用户名', dataIndex: 'username', key: 'username',
          render:(text,recorder,index)=>{   return <div>{recorder.name}</div> }
        },
        { title: '消费额', dataIndex: 'pay', key: 'pay',
        render:(text,recorder,index)=>{   return <div>{recorder.total/100}</div> }
        },
    ];


    return <Table
    columns={columns}
    dataSource={userdata.map(item => ({
        ...item,
        key: item.userid
    }))}
/>

}



export default Userrank;