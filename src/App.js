import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/user/myPage/Index";
import OrderPage from "./pages/user/myPage/order/Index";
import UserInfoPage from "./pages/user/myPage/userInfo/Index";

function App() {
  return (
    <div className="App">

      {/* <MyPage /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path="/user/mypage/temp" element={<MyPage />}>
              <Route path="order" element={<OrderPage />}/>
              <Route path="userinfo" element={<UserInfoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
