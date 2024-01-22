import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "../pages/admin/eventPage/Index"
import EventListPage from "../pages/admin/eventPage/list/Index"
import EventProductEnrollPage from "../pages/admin/eventPage/enroll/Index"
import EventBrandEnrollPage from "../pages/admin/eventPage/enroll/BrandIndex"
import EventProductEditPage from "../pages/admin/eventPage/edit/Index"
import EventBrandEditPage from "../pages/admin/eventPage/edit/BrandIndex"
import OrderPage from "../pages/admin/orderPage/Index";
import AdminRefund from '../pages/admin/Refund/Index'
import AdminRefundList from '../pages/admin/Refund/List/Index'
import AdminRefundDetail from '../pages/admin/Refund/Detail/Index'
import LoginPage from "../pages/user/Login/Index";
import UserPage from "../pages/admin/userPage/Index";
import UserListPage from "../pages/admin/userPage/list/Index";
import EditPage from "../pages/admin/userPage/edit/Index";

const AdminRoutes = () => {
    return (
        // <BrowserRouter>
        <Route>
            {/* 관리자 이벤트 페이지 */}
            <Route path="/admin/event" element={<EventPage />}>
                            <Route path="list" element={<EventListPage />} />
                            <Route path="enrollproduct" element={<EventProductEnrollPage />} />
                            <Route path="enrollbrand" element={<EventBrandEnrollPage />} />
                            <Route path="editproduct/:eventId" element={<EventProductEditPage />} />
                            <Route path="editbrand/:eventId" element={<EventBrandEditPage />} />
                        </Route>

                        {/* 관리자 환불 관리 페이지 */}
                        <Route path="/admin/refund" element={<AdminRefund />}>
                            <Route path="list" element={<AdminRefundList />} />
                            <Route path="detail" element={<AdminRefundDetail />} />
                        </Route>

                        {/* 관리자 주문 관리 페이지 */}
                        <Route path="/admin/order" element={<OrderPage />} />

                        {/* 관리자 회원 관리 페이지 */}
                        <Route path="/admin/user" element={<UserPage />}>
                            <Route path="list" element={<UserListPage />} />
                            <Route path="list/:memberId" element={<EditPage />} />
                        </Route>

                        {/* 관리자 로그인 */}
                        <Route path="/admin/login" element={<LoginPage userType="admin" />} />
                    // {/* </BrowserRouter> */}
        </Route>
        
    );
};

export default AdminRoutes;


