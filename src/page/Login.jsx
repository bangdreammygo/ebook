//登录页面喵
import "../css/base.module.css"
import {LoginLayout} from "../components/layout"
import {
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined
} from '@ant-design/icons';
import src1 from "../img/homepage.jpg"
import {
  LoginFormPage,
} from '@ant-design/pro-components';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import logo from "../img/Ebook1.png";
import movie from "../movie/loginmovie4.mp4"
import { useNavigate } from "react-router-dom";
import { setLogin } from "../service/logintest";
const Login=()=>{

  //登录
  const nav=useNavigate();
  const getvalue=async ({username,password})=>{
    if(username===leaglename&&password===leaglepassword){
      const res=await setLogin(username,password);
      alert("登陆成功");
      nav("/");
    }
    else{
      alert("账号密码错误");
    }
  }



  //写死密码账号
  const leaglename="蔡徐坤鸡你太美";
  const leaglepassword="114514";


  return(
     <LoginLayout>
          <LoginFormPage
            backgroundVideoUrl={movie}
            logo={logo}
            title="EBOOK"
            subTitle="方便快捷的线上书城"
            backgroundImageUrl={src1}
            style={{
                height:"840px",
            }}
            activityConfig={{
              style: {
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                color: " #F0E68C",
                borderRadius: 8,
                backgroundColor: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(4px)',
                height:"110px",
                width:"220px"
              },
              title: '线上书城',
              subTitle:"限时优惠"
            }}
            onFinish={(value)=>{getvalue(value)}}
          >
                {/* 用户名 */}
                <Form.Item name="username"
                  rules={[
                    {
                      required:true,
                      message:"请输入用户名"
                    },
                  ]}
                >
                     <Input autoComplete='off' size='large' placeholder='请输入您的用户名' prefix={<UserOutlined />} >
                    </Input>
                </Form.Item>
                {/* 密码 */}
               <Form.Item  name={"password"}
                rules={[
                  {
                    required:true,
                    message:"请输入密码"
                  },
                ]}
               >
               <Input.Password
                placeholder="请输入密码"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                prefix={<LockOutlined />}
                size='large'
                />
               </Form.Item>

            <div
              style={{
                marginBlockEnd: 24,
                marginBottom:30,
                display:"flex",
                justifyContent:"space-between"
              }}
            >
              <a 
            href='./index'
              >
                没有账户？戳戳这里！
              </a>
              <a href='./index'
              >
                忘记密码
              </a>
            </div>
          </LoginFormPage>
     </LoginLayout>
  );
};


export default Login;