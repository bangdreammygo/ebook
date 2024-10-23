//注册页面
import {LoginLayout} from "../components/layout"
import {
    LockOutlined,
    UserOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined, MailOutlined
} from '@ant-design/icons';
import {
  LoginFormPage,
} from '@ant-design/pro-components';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import logo from "../img/Ebook1.png";
import movie from "../movie/loginmovie4.mp4"
import { useNavigate } from "react-router-dom";
import {register} from "../service/logintest";
import {Button} from "antd";
import {useEffect, useState} from "react";

const Register=()=>{
  const navigate=useNavigate();
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(60);


    useEffect(() => {
      let timer;
      if (cooldown) {
        timer = setInterval(() => {
          setCooldownTime(prevTime => {
            if (prevTime <= 1) {
              clearInterval(timer);
              setCooldown(false);
              return 60;
            }
            return prevTime - 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [cooldown]);

  const check=async (username,password,passwordagain)=>{
     //校验密码不一致
     if(password!==passwordagain){alert("输入密码不一致");}
     else {
      const res=await register(username,password);
      if(res.code===444){
        alert(res.data);
      }
      else if (res.code === 200){
        alert(res.data);
        navigate("/login");
      }
    }
  }

  const handleSendVerificationCode = async () => {
    const email = document.querySelector('input[name="email"]')?.value;
    if (email) {
        setCooldown(true);
        alert("消息已发送!");
    }
    else {
      alert("邮箱不能为空！");
    }
  };

  return(
      <LoginLayout>
          <LoginFormPage
              backgroundVideoUrl={movie}
              logo={logo}
              title="注册"
              subTitle="注册与忘记密码"
              submitter={{ searchConfig: { submitText: '注册' }}}
              style={{ height: "960px" }}
              onFinish={({ username, password, passwordagain, email, verificationCode }) => {
                  check(username, password, passwordagain, email, verificationCode);
              }}
          >
              {/* 用户名 */}
              <Form.Item name="username"
                         rules={[
                             { required: true, message: "请输入用户名" }
                         ]}
              >
                  <Input autoComplete='off' size='large' placeholder='请输入您的用户名' prefix={<UserOutlined />} />
              </Form.Item>

              {/* 密码 */}
              <Form.Item name="password"
                         rules={[
                             { required: true, message: "请输入密码" }
                         ]}
              >
                  <Input.Password
                      placeholder="请输入密码"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      prefix={<LockOutlined />}
                      size='large'
                  />
              </Form.Item>

              {/* 重复密码 */}
              <Form.Item name="passwordagain"
                         rules={[
                             { required: true, message: "请重复一次密码" }
                         ]}
              >
                  <Input.Password
                      placeholder="请重复一次密码"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      prefix={<LockOutlined />}
                      size='large'
                  />
              </Form.Item>

              {/* 邮箱 */}
              <Form.Item name="email"
                         rules={[
                             { required: true, message: "请输入邮箱" },
                             { type: 'email', message: "请输入有效的邮箱地址" }
                         ]}
              >
                  <Input
                      name="email"
                      autoComplete='off'
                      size='large'
                      placeholder='请输入您的邮箱'
                      prefix={<MailOutlined />}
                      suffix={
                          <Button
                              onClick={handleSendVerificationCode}
                              disabled={cooldown}
                          >
                              {cooldown ? `${cooldownTime}秒后再试` : '获取验证码'}
                          </Button>
                      }
                  />
              </Form.Item>
          </LoginFormPage>
      </LoginLayout>
  );
};


export default Register;