import MyPage from "@userPages/myPage/Index";
import UserInfoPage from "@userPages/myPage/UserInfo/Index";
import DirectAskPage from "@userPages/myPage/DirectAsk/Index";
import Review from "@userPages/myPage/Review/Index";
import EnrollReview from "@userPages/myPage/Review/Enroll/Index";
import Mileage from "@userPages/myPage/Mileage/Index";
import MileageReq from "@userPages/myPage/Mileage/Req/Index";
import UserRefund from "@userPages/myPage/Refund/Index";
import UserOrder from "@userPages/myPage/Order/Index";
import EditPassword from "@userPages/myPage/UserInfo/EditPassword";
import Leave from "@userPages/myPage/UserInfo/Leave";
import WishList from "@userPages/WishList/WishList";
import UserRefundDetail from "@userPages/myPage/Refund/Detail/Index";
import ReqRefund from "@userPages/myPage/Refund/Enroll/Index";
import AskEnrollPage from "@userPages/myPage/DirectAsk/Enroll/Index";
import FaqPage from "@userPages/myPage/FAQ/Index";
import SignPage from "@userPages/Sign/Index";
import FindPasswordPage from "@userPages/Login/FindPassword";
import MainPage from "@userPages/Home/Index";
import ProductListPage from "@userPages/ProductSet/Index";
import BestProductPage from "@userPages/ProductSet/BestProdudctPage";
import EventProductPage from "@userPages/ProductSet/EventProductPage";
import Cart from "@userPages/Cart/Index";
import OrderDetail from "@userPages/myPage/Order/Detail/Index";
import SearchPage from "@userPages/Search/Index";
import ProductDetail from "@userPages/Product/Index";
import Order from "@userPages/Order/Index";
import UserCancel from "@userPages/myPage/Cancel/Index";
import UserCancelDetail from "@userPages/myPage/Cancel/Detail/Index";
import EventPage from "@userPages/Event/Index";
import ProductEventList from "@userPages/Event/ProductEventPage";
import BrandEventPage from "@userPages/Event/BrandEventPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NewProductPage from "@userPages/ProductSet/NewProductPage";
import CategorySet from "@userPages/CategorySet/Index";

const UserRoutes = () => {
  return (
    <Routes>
      {/* 로그인, 회원가입, 비밀번호 찾기 */}
      <Route path="sign" element={<SignPage />} />
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route path="findpassword" element={<FindPasswordPage />} />
      {/* 메인페이지 */}
      <Route path="mainpage" element={<MainPage />} />
      {/* 베스트, 이벤트 */}
      <Route path="collections/*" element={<ProductListPage />}>
        <Route path="best" element={<BestProductPage />} />
        <Route path="event" element={<EventProductPage />} />
        <Route path="new" element={<NewProductPage />} />
      </Route>
      <Route path="event/*" element={<EventPage />}>
        <Route path="product" element={<ProductEventList />} />
        <Route path="brand" element={<BrandEventPage />} />
      </Route>
      {/* 상품 상세 페이지 */}
      <Route path="products/:itemId" element={<ProductDetail />} />
      {/* 검색 페이지 */}
      <Route path="search" element={<SearchPage />} />
      <Route path="categories/:id" element={<CategorySet />} />
      {/* 위시리스트 */}
      <Route path="wishlist" element={<WishList />} />
      {/* 장바구니 */}
      <Route path="cart" element={<Cart />} />
      {/* 주문하기 */}
      <Route path="order" element={<Order />} />
      {/* 마이페이지 */}
      <Route path="mypage/*" element={<MyPage />}>
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
