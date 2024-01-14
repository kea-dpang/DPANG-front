import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/user/myPage/Index";
import UserInfoPage from "./pages/user/myPage/userInfo/Index";
import DirectAskPage from "./pages/user/myPage/directAsk/Index";

function App() {
  return (
    <div className="App">

      {/* <MyPage /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path="/user/mypage/temp" element={<MyPage />}>
              <Route path="directask" element={<DirectAskPage />}/>
              <Route path="userinfo" element={<UserInfoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
