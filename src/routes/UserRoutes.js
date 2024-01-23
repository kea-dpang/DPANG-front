import MyPage from "../pages/user/myPage/Index";
import UserInfoPage from "../pages/user/myPage/userInfo/Index";
import DirectAskPage from "../pages/user/myPage/directAsk/Index";
import Review from '../pages/user/myPage/Review/Index'
import EnrollReview from '../pages/user/myPage/Review/Enroll/Index'
import Mileage from "../pages/user/myPage/Mileage/Index";
import MileageReq from "../pages/user/myPage/Mileage/Req/Index";
import UserRefund from '../pages/user/myPage/Refund/Index';
import UserOrder from '../pages/user/myPage/Order/Index';
import EditPassword from '../pages/user/myPage/userInfo/EditPassword';
import Leave from "../pages/user/myPage/userInfo/Leave";
import WishList from "../pages/user/WishList";
import UserRefundDetail from '../pages/user/myPage/Refund/Detail/Index'
import ReqRefund from '../pages/user/myPage/Refund/Enroll/Index'
import AskEnrollPage from "../pages/user/myPage/directAsk/Enroll/Index";
import FaqPage from "../pages/user/myPage/Faq/Index";
import LoginPage from "../pages/user/Login/Index";
import SignPage from "../pages/user/Sign/Index";
import FindPasswordPage from "../pages/user/Login/FindPassword";
import MainPage from '../pages/user/mainPage/Index'
import ProductListPage from "../pages/user/productListPage/Index";
import BestProductPage from "../pages/user/productListPage/BestProdudctPage";
import EventProductPage from "../pages/user/productListPage/EventProductPage";
import OrderDetail from '../pages/user/myPage/Order/Detail/Index';
import SearchPage from "../pages/user/searchPage/Index";
import ProductDetail from "../pages/user/productDetail/Index";
import UserCancel from '../pages/user/myPage/Cancel/Index'
import UserCancelDetail from '../pages/user/myPage/Cancel/Detail/Index'
import React from 'react';
import { Route, Routes } from 'react-router-dom';


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
            {/* 상품 상세 페이지 */}
            <Route path="products/:itemId" element={<ProductDetail/>}/>
            {/* 검색 페이지 */}
            <Route path="search" element={<SearchPage/>}/>
            {/* 위시리스트 */}
            <Route path="wishlist" element={<WishList />} />
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
                <Route path="review/enroll" element={<EnrollReview />} />
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