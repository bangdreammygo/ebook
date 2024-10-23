// 基本复用addform
import { Button, Form ,Input,Upload,Space} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { addBook } from "../service/book";
import { useNavigate } from "react-router-dom";
import { getBookById } from "../service/book";
const { TextArea } = Input;

// 获取到书籍的id
const Modiform=({bookid})=>{

   //////////////////////////////////补齐回调显现代码////////////////////
   // 获取表单 
   const [form]=Form.useForm();
   const setBookInfo=async (bookid)=>{
    const res= await getBookById(bookid);
    const realprice=res.price/100;
    res.price=realprice;
    form.setFieldsValue(res);
    const image=[res.cover];
    setImglist(image.map(url=>{return {url}}));
    setImg(image.map(url=>{return {url}}));
   }
  //    获取图片列表
  const [imglist,setImglist]=useState([]);

  //异步渲染
  useEffect(
    ()=>{
    //  通过id获取数据渲染
     setBookInfo(bookid);
    }
    ,[form,bookid]);



    ///////////////////////////////////下方为复用add的代码/////////////////////
    // 存储的图片
    const [img,setImg]=useState([]);
//    上传图片的回调
    const OnChange=(value)=>{
        //设置图片信息
        setImg(value.fileList);
    }
    const nav=useNavigate();
// 提交表单的回调
    const onSubmit=async (value)=>{
        if(img.length===0){alert("请上传封面！");return;}
        const book={
            id:bookid,
            title:value.title,
            price:(value.price*100),
            cover:img[0].url,
            author:value.author,
            brief:value.brief,
            ISBN:value.isbn,
            rest:value.rest,
            del:0
        }
        const res=await addBook(book,value.isbn);
        if(res){
            alert("修改成功！");
            nav("/worker");
        }
        else{
            alert("修改失败");
            nav("/worker");
        }
    }

    return(
        <Form
        labelCol={{span:4}}
        wrapperCol={{span:16}}
        initialValues={{type:1}}
        onFinish={onSubmit}
        form={form}
       >
          {/* 书籍名称 */}
          <Form.Item
           label="书名"
           name="title"
           rules={[{required:true,message:"请输入书名"}]}
          >
              <Input placeholder="请输入书名"
              allowClear={true}
              showCount
              maxLength={40}></Input>
          </Form.Item>
          {/* 作者 */}
          <Form.Item
           label="作者"
           name="author"
           rules={[{required:true,message:"请输入作者名"}]}
          >
              <Input placeholder="请输入作者名"
              allowClear={true}
              showCount
              maxLength={40}></Input>
          </Form.Item>
          {/* 价格 */}
          <Form.Item
           label="价格"
           name="price"
           rules={[{required:true,message:"请输入价格"},  { pattern: /^\d+(\.\d{1,2})?$/, message: "请输入正确的价格格式！" }]}
          >
              <Input placeholder="请输入价格"
              allowClear={true}
              ></Input>
          </Form.Item>
          {/* IBSN编号 */}
          <Form.Item
           label="IBSN编号"
           name="isbn"
           rules={[{required:true,message:"请输入IBSN编号"}]}
          >
              <Input placeholder="请输入IBSN编号"
              allowClear={true}
              showCount
              maxLength={20}></Input>
          </Form.Item>
          {/* 书籍简介 */}
          <Form.Item
           label="简介"
           name="brief"
           rules={[{required:true,message:"请输入书籍简介"}]}
          >
              <TextArea placeholder="请输入书籍简介"
              allowClear={true}
              showCount
              maxLength={400}
              style={{
                height: 120,
                resize: 'none',
              }}
              ></TextArea>
          </Form.Item>
          {/* 库存 */}
          <Form.Item
           label="剩余库存"
           name="rest"
           rules={[{required:true,message:"请输入库存"}, { pattern: /^[1-9]\d*$/, message: "请正确输入数字！" }]}
          >
              <Input placeholder="请输入剩余库存"
              allowClear={true}
              ></Input>
          </Form.Item>
          {/* 封面 */}
          <Form.Item
           label="封面"
           rules={[{required:true,message:"请上传图片"}]}
          >
          {/* 使用upload组件实现 */}
          <Upload
           listType="picture-card"
           showUploadList
           action={"http://localhost:8080/img/add"}
           name="cover"
           onChange={OnChange}
           maxCount={1}
           onRemove={()=>{setImg([]);}}
           fileList={imglist}
          >
            <div style={{marginTop:"8"}}>
                <PlusOutlined></PlusOutlined>
            </div>
          </Upload>
          </Form.Item>
          {/*最终的提交按钮*/}
         <Form.Item name={"submit"} wrapperCol={{offset:11}}>
          <Space>
          <Button 
          size="large"
          type="primary"
          htmlType="submit"
          >保存修改</Button>
         </Space>
         </Form.Item>
       </Form>
    );

}

export default Modiform;