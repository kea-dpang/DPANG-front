import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/admin/eventPage/Index"
import EventListPage from "./pages/admin/eventPage/list/Index"
import EventProductEnrollPage from "./pages/admin/eventPage/enroll/Index"
import EventBrandEnrollPage from "./pages/admin/eventPage/enroll/BrandIndex"
import EventProductEditPage from "./pages/admin/eventPage/edit/Index"
import EventBrandEditPage from "./pages/admin/eventPage/edit/BrandIndex"
import MyPage from "./pages/user/myPage/Index";
import UserInfoPage from "./pages/user/myPage/userInfo/Index";
import DirectAskPage from "./pages/user/myPage/directAsk/Index";
import Review from './pages/user/myPage/Review/Index'
import EnrollReview from './pages/user/myPage/Review/Enroll/Index'
import Mileage from "./pages/user/myPage/Mileage/Index";
import MileageReq from "./pages/user/myPage/Mileage/Req/Index";
import UserRefund from './pages/user/myPage/Refund/Index';
import UserOrder from './pages/user/myPage/Order/Index';
import EditPassword from './pages/user/myPage/userInfo/EditPassword';
import Leave from "./pages/user/myPage/userInfo/Leave";
import WishList from "./pages/user/WishList";
import OrderPage from "./pages/admin/orderPage/Index";
import Detail from './pages/user/myPage/Refund/Detail/Index'
import ReqRefund from './pages/user/myPage/Refund/Enroll/Index'
import AdminRefund from './pages/admin/Refund/Index'
import AdminRefundList from './pages/admin/Refund/List/Index'
import AdminRefundDetail from './pages/admin/Refund/Detail/Index'
import MainPage from './pages/user/mainPage/Index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 관리자 이벤트 페이지 */}
          <Route path="/admin/event" element={<EventPage />}>
              <Route path="list" element={<EventListPage/>}/>
              <Route path="enrollproduct" element={<EventProductEnrollPage />}/>
              <Route path="enrollbrand" element={<EventBrandEnrollPage />}/>
              <Route path="editproduct/:eventId" element={<EventProductEditPage />}/>
              <Route path="editbrand/:eventId" element={<EventBrandEditPage />}/>
          </Route>

          <Route path="/admin/refund" element={<AdminRefund />}>
            <Route path="list" element={<AdminRefundList />} />
            <Route path="detail" element={<AdminRefundDetail />}/>
          </Route>
          {/*관리자 주문관리 페이지 */}
          <Route path="/admin/order" element={<OrderPage />}/>

          {/* <MyPage /> */}
          <Route path="/user/mypage/temp" element={<MyPage />}>
            <Route path="directask" element={<DirectAskPage />} />
            <Route path="userinfo" element={<UserInfoPage />} />
            <Route path="userinfo/editpassword" element={<EditPassword />} />
            <Route path="userinfo/leave" element={<Leave />} />
            <Route path="review" element={<Review />} />
            <Route path="review/enroll" element={<EnrollReview />} />
            <Route path="mileage" element={<Mileage />} />
            <Route path="mileage/req" element={<MileageReq />} />
            <Route path="refund" element={<UserRefund />} />
            <Route path="order" element={<UserOrder />} />
            <Route path="refund/detail" element={<Detail />} />
            <Route path="refund/enroll" element={<ReqRefund />} />
          </Route>
          {/* wishlist */}
          <Route path="/user/wishlist" element={<WishList/>}/>

          {/* 메인 페이지 */}
          <Route path="/user/mainpage" element={<MainPage/>}>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
