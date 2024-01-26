import React from "react";
import { Route, Routes } from "react-router-dom";
import EventListPage from "pages/admin/eventPage/List/Index";
import EventProductEnrollPage from "pages/admin/eventPage/Enroll/Index";
import EventBrandEnrollPage from "pages/admin/eventPage/Enroll/BrandIndex";
import EventProductEditPage from "pages/admin/eventPage/Edit/Index";
import EventBrandEditPage from "pages/admin/eventPage/Edit/BrandIndex";
import OrderPage from "pages/admin/Order/OrderBox";
import AdminRefundList from "pages/admin/refund/List/Index";
import AdminRefundDetail from "pages/admin/refund/Detail/Index";
import AdminMileageView from "pages/admin/mileage/List/Index";
import AdminPage from "pages/admin/Index";
import AdminUserListPage from "pages/admin/userInfo/List/Index";
import AdminUserEditPage from "pages/admin/userInfo/Edit/Index";
import AdminFaqListPage from "pages/admin/faqPage/List/Index";
import AdminCancelList from "pages/admin/cancel/List/Index";
import AdminCancelDetail from "pages/admin/cancel/Detail/Index";
import BrandListPage from "pages/admin/item/store/List/Index";
import BrandEditPage from "pages/admin/item/store/Edit/Index";
import BrandEnrollPage from "pages/admin/item/store/Enroll/Index";
import AdminErollPage from "pages/admin/faqPage/Enroll/Index";
import AdminEditPage from "pages/admin/faqPage/Edit/Index";
import AdminDirectAskPage from "pages/admin/directAskPage/List/Index";
import AdminAskEnrollPage from "pages/admin/directAskPage/Enroll/Index";
import AdminProduct from "pages/admin/item/product/List/Index";
import ProductEnrollPage from "pages/admin/item/product/Enroll/Index";
import ProductEditPage from "pages/admin/item/product/Edit/Index";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<AdminPage />}>
        {/* 회원관리 */}
        <Route path="user" element={<AdminUserListPage />} />
        <Route path="user/:memberId" element={<AdminUserEditPage />} />
        <Route path="mileage" element={<AdminMileageView />} />
        {/* 상품 관리 */}
        <Route path="product" element={<AdminProduct />} />
        <Route path="product/enroll" element={<ProductEnrollPage />} />
        <Route path="product/:id" element={<ProductEditPage />} />
        <Route path="brand" element={<BrandListPage />} />
        <Route path="brand/enroll" element={<BrandEnrollPage />} />
        <Route path="brand/:id" element={<BrandEditPage />} />
        {/* 이벤트 관리 */}
        <Route path="event" element={<EventListPage />} />
        <Route
          path="event/enrollproduct"
          element={<EventProductEnrollPage />}
        />
        <Route path="event/enrollbrand" element={<EventBrandEnrollPage />} />
        <Route
          path="event/editproduct/:eventId"
          element={<EventProductEditPage />}
        />
        <Route
          path="event/editbrand/:eventId"
          element={<EventBrandEditPage />}
        />
        {/* 주문관리 */}
        <Route path="order" element={<OrderPage />} />
        {/* 환불관리 */}
        <Route path="refund" element={<AdminRefundList />} />
        <Route path="refund/:id" element={<AdminRefundDetail />} />
        <Route path="cancel" element={<AdminCancelList />} />
        <Route path="cancel/:id" element={<AdminCancelDetail />} />
        {/* 고객센터 */}
        {/* faq */}
        <Route path="faq" element={<AdminFaqListPage />} />
        <Route path="faq/:faqId" element={<AdminEditPage />} />
        <Route path="faq/enroll" element={<AdminErollPage />} />
        {/* 1:1문의 */}
        <Route path="directask" element={<AdminDirectAskPage />} />
        <Route path="directask/:askId" element={<AdminAskEnrollPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
