import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventListPage from "../pages/admin/eventPage/list/Index"
import EventProductEnrollPage from "../pages/admin/eventPage/enroll/Index"
import EventBrandEnrollPage from "../pages/admin/eventPage/enroll/BrandIndex"
import EventProductEditPage from "../pages/admin/eventPage/edit/Index"
import EventBrandEditPage from "../pages/admin/eventPage/edit/BrandIndex"
import OrderPage from "../pages/admin/orderPage/OrderBox";
import AdminRefundList from '../pages/admin/Refund/List/Index'
import AdminRefundDetail from '../pages/admin/Refund/Detail/Index'
import AdminMileageView from '../pages/admin/Mileage/List/Index'
import AdminPage from '../pages/admin/Index'
import AdminUserListPage from "../pages/admin/userPage/list/Index";
import AdminUserEditPage from "../pages/admin/userPage/edit/Index";
import AdminFaqListPage from '../pages/admin/faqPage/list/Index';
import BrandListPage from '../pages/admin/Item/Store/List/Index';
import BrandEditPage from '../pages/admin/Item/Store/Edit/Index';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<AdminPage/>}>
                {/* 회원관리 */}
                <Route path="user" element={<AdminUserListPage />}/>
                <Route path="user/:memberId" element={<AdminUserEditPage />}/>
                <Route path="mileage" element={<AdminMileageView />}/>
                {/* 상품 관리 */}
                <Route path="brand" element={<BrandListPage/>}/>
                <Route path="brand/:id" element={<BrandEditPage/>}/>
                {/* 이벤트 관리 */}
                <Route path="event" element={<EventListPage />}/>
                <Route path="event/enrollproduct" element={<EventProductEnrollPage />} />
                <Route path="event/enrollbrand" element={<EventBrandEnrollPage />} />
                <Route path="event/editproduct/:eventId" element={<EventProductEditPage />} />
                <Route path="event/editbrand/:eventId" element={<EventBrandEditPage />} />
                {/* 주문관리 */}
                <Route path="order" element={<OrderPage />} />
                {/* 환불관리 */}
                <Route path="refund" element={<AdminRefundList />}/>
                <Route path="refund/:id" element={<AdminRefundDetail />} />
                {/* 고객센터 */}
                <Route path="faq" element={<AdminFaqListPage/>}/>
                {/* </Route> */}
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
