import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Detail from '../pages/user/myPage/Refund/Detail/Index'
import ReqRefund from '../pages/user/myPage/Refund/Enroll/Index'
import AskEnrollPage from "../pages/user/myPage/directAsk/Enroll/Index";
import DetailPage from "../pages/user/myPage/directAsk/Detail";
import FaqPage from "../pages/user/myPage/Faq/Index";
import LoginPage from "../pages/user/Login/Index";
import SignPage from "../pages/user/Sign/Index";
import FindPasswordPage from "../pages/user/Login/FindPassword";
import MainPage from '../pages/user/mainPage/Index'
import ProductListPage from "../pages/user/productListPage/Index";
import BestProductPage from "../pages/user/productListPage/BestProdudctPage";
import EventProductPage from "../pages/user/productListPage/EventProductPage";
import OrderDetail from '../pages/user/myPage/Order/Detail/Index'

const RootRoute = () => {
    
    return (
        <BrowserRouter>
        <Routes>
            <route path="/user/*" element={<UserRoutes/>}/>
            <route path="/admin/*" element={<AdminRoutes/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;

