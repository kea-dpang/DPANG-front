import MyPage from "../pages/user/myPage/Index";
import UserInfoPage from "../pages/user/myPage/UserInfo/Index";
import DirectAskPage from "../pages/user/myPage/DirectAsk/Index";
import Review from "../pages/user/myPage/Review/Index";
import EnrollReview from "../pages/user/myPage/Review/Enroll/Index";
import Mileage from "../pages/user/myPage/Mileage/Index";
import MileageReq from "../pages/user/myPage/Mileage/Req/Index";
import UserRefund from "../pages/user/myPage/Refund/Index";
import UserOrder from "../pages/user/myPage/Order/Index";
import EditPassword from "../pages/user/myPage/UserInfo/EditPassword";
import Leave from "../pages/user/myPage/UserInfo/Leave";
import WishList from "../pages/user/WishList/WishList";
import UserRefundDetail from "../pages/user/myPage/Refund/Detail/Index";
import ReqRefund from "../pages/user/myPage/Refund/Enroll/Index";
import AskEnrollPage from "../pages/user/myPage/DirectAsk/Enroll/Index";
import FaqPage from "../pages/user/myPage/FAQ/Index";
import LoginPage from "../pages/user/Login/Index";
import SignPage from "../pages/user/Sign/Index";
import FindPasswordPage from "../pages/user/Login/FindPassword";
import MainPage from "../pages/user/Home/Index";
import ProductListPage from "../pages/user/ProductSet/Index";
import BestProductPage from "../pages/user/ProductSet/BestProdudctPage";
import EventProductPage from "../pages/user/ProductSet/EventProductPage";
import Cart from "../pages/user/Cart/Index";
import OrderDetail from "../pages/user/myPage/Order/Detail/Index";
import SearchPage from "../pages/user/Search/Index";
import ProductDetail from "../pages/user/Product/Index";
import Order from "../pages/user/Order/Index";
import UserCancel from "../pages/user/myPage/Cancel/Index";
import UserCancelDetail from "../pages/user/myPage/Cancel/Detail/Index";
import EventPage from "pages/user/Event/Index";
import ProductEventList from "pages/user/Event/ProductEventPage";
import BrandEventPage from "pages/user/Event/BrandEventPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  return (
    <Routes>
      {/* 로그인, 회원가입, 비밀번호 찾기 */}
      <Route path="sign" element={<SignPage />} />
      <Route path="login" element={<LoginPage userType="user" />} />
      <Route path="findpassword" element={<FindPasswordPage />} />
      {/* 메인페이지 */}
      <Route path="mainpage" element={<MainPage />} />
      {/* 베스트, 이벤트 */}
      <Route path="collections/*" element={<ProductListPage />}>
        <Route path="best" element={<BestProductPage />} />
        <Route path="event" element={<EventProductPage />} />
      </Route>
      <Route path="event/*" element={<EventPage />}>
        <Route path="product" element={<ProductEventList />} />
        <Route path="brand" element={<BrandEventPage />} />
      </Route>
      {/* 상품 상세 페이지 */}
      <Route path="products/:itemId" element={<ProductDetail />} />
      {/* 검색 페이지 */}
      <Route path="search" element={<SearchPage />} />
      {/* 위시리스트 */}
      <Route path="wishlist" element={<WishList />} />
      {/* 장바구니 */}
      <Route path="cart" element={<Cart />} />
      {/* 주문하기 */}
      <Route path="order" element={<Order />} />
      {/* 마이페이지 */}
      <Route path="mypage/temp/*" element={<MyPage />}>
        <Route path="directask" element={<DirectAskPage />} />
        <Route path="directask/enroll" element={<AskEnrollPage />} />
        <Route path="directask" element={<DirectAskPage />} />
        <Route path="directask/enroll" element={<AskEnrollPage />} />
        <Route path="directask/:askId" element={<AskEnrollPage />} />
        <Route path="directask/:askId" element={<AskEnrollPage />} />
        {/* FAQ */}
        <Route path="faq" element={<FaqPage />} />

        {/* 회원정보 */}
        <Route path="userinfo" element={<UserInfoPage />} />
        <Route path="userinfo/editpassword" element={<EditPassword />} />
        <Route path="userinfo/leave" element={<Leave />} />
        {/* 리뷰관리 */}
        <Route path="review" element={<Review />} />
        <Route path="review/enroll/:id" element={<EnrollReview />} />
        {/* 마일리지 */}
        <Route path="mileage" element={<Mileage />} />
        <Route path="mileage/req" element={<MileageReq />} />
        {/* 환불 */}
        <Route path="refund" element={<UserRefund />} />
        <Route path="refund/detail/:id" element={<UserRefundDetail />} />
        <Route path="refund/enroll" element={<ReqRefund />} />
        <Route path="cancel" element={<UserCancel />} />
        <Route path="cancel/detail/:id" element={<UserCancelDetail />} />
        {/* 주문 */}
        <Route path="order" element={<UserOrder />} />
        <Route path="order/detail/:id" element={<OrderDetail />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
