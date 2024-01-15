import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/admin/eventPage/Index"
import EventListPage from "./pages/admin/eventPage/list/Index"
import EventEnrollPage from "./pages/admin/eventPage/enroll/Index"
import EventEditPage from "./pages/admin/eventPage/edit/Index"
import MyPage from "./pages/user/myPage/Index";
import UserInfoPage from "./pages/user/myPage/userInfo/Index";
import DirectAskPage from "./pages/user/myPage/directAsk/Index";
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <ReviewList /> */}
      <EnrollReview />

=======
      <BrowserRouter>
        <Routes>
          {/* 관리자 이벤트 페이지 */}
          <Route path="/admin/event" element={<EventPage />}>
              <Route path="list" element={<EventListPage/>}/>
              <Route path="enroll" element={<EventEnrollPage />}/>
              <Route path="edit" element={<EventEditPage />}/>
          </Route>
          {/* <MyPage /> */}
          <Route path="/user/mypage/temp" element={<MyPage />}>
              <Route path="directask" element={<DirectAskPage />}/>
              <Route path="userinfo" element={<UserInfoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 816efa8b639c631798bf16de295da3a15499bd2d
    </div>
  );
}

export default App;
