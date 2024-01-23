import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventListPage from "../pages/admin/eventPage/list/Index"
import EventProductEnrollPage from "../pages/admin/eventPage/enroll/Index"
import EventBrandEnrollPage from "../pages/admin/eventPage/enroll/BrandIndex"
import EventProductEditPage from "../pages/admin/eventPage/edit/Index"
import EventBrandEditPage from "../pages/admin/eventPage/edit/BrandIndex"
import OrderPage from "../pages/admin/orderPage/Index";
import AdminRefund from '../pages/admin/Refund/Index'
import AdminRefundList from '../pages/admin/Refund/List/Index'
import AdminRefundDetail from '../pages/admin/Refund/Detail/Index'
import AdminMileage from '../pages/admin/Mileage/Index'
import AdminMileageView from '../pages/admin/Mileage/List/Index'
import EventPage from '../pages/admin/eventPage/Index'
import ItemPage from "../pages/admin/Item/Index";
import StoreListPage from "../pages/admin/Item/Store/List/Index";
import StoreEnrollPage from "../pages/admin/Item/Store/Enroll/Index";
import StoreEditPage from "../pages/admin/Item/Store/Edit/Index";



const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="event" element={<EventPage />}>
                <Route path="list" element={<EventListPage />} />
                <Route path="enrollproduct" element={<EventProductEnrollPage />} />
                <Route path="enrollbrand" element={<EventBrandEnrollPage />} />
                <Route path="editproduct/:eventId" element={<EventProductEditPage />} />
                <Route path="editbrand/:eventId" element={<EventBrandEditPage />} />
            </Route>

            <Route path="refund" element={<AdminRefund />}>
                <Route path="list" element={<AdminRefundList />} />
                <Route path="detail/:id" element={<AdminRefundDetail />} />
            </Route>

            <Route path="mileage" element={<AdminMileage />}>
                <Route path="list" element={<AdminMileageView />} />
            </Route>

            <Route path="order" element={<OrderPage />} />

            <Route path="item" element={<ItemPage />}>
                <Route path="storelist" element={<StoreListPage />} />
                <Route path="enrollstore" element={<StoreEnrollPage />} />
                <Route path="editstore/:id" element={<StoreEditPage />} />
            </Route>

        </Routes>
    );
};

export default AdminRoutes;
