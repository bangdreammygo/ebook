import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import { ConfigProvider } from "antd";
function App() {
  return (
  <ConfigProvider>


  <RouterProvider
   router={router}
   ></RouterProvider>


  </ConfigProvider>
  );
}

export default App;
