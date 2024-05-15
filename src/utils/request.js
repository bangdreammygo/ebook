import axios from "axios";



const request=axios.create({
    baseURL:"http://localhost:8080",
    timeout:5000
});
// 添加请求拦截器
request.interceptors.request.use((config)=>{
    // 在发送请求之前做些什么
    const token=sessionStorage.getItem("token");
    console.log("注入token");
    //注入token
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
  },
   function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


export{request}  ;