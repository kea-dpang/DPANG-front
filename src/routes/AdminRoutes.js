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
import ItemPage from "../pages/admin/Item/Index";
import StoreListPage from "../pages/admin/Item/Store/List/Index";
import StoreEnrollPage from "../pages/admin/Item/Store/Enroll/Index";
import StoreEditPage from "../pages/admin/Item/Store/Edit/Index";
import AdminPage from '../pages/admin/Index'
import AdminUserListPage from "../pages/admin/userPage/list/Index";
import AdminUserEditPage from "../pages/admin/userPage/edit/Index";
import AdminFaqListPage from '../pages/admin/faqPage/list/Index';
import AdminCancelList from '../pages/admin/Cancel/List/Index';
import AdminCancelDetail from '../pages/admin/Cancel/Detail/Index';
import BrandListPage from '../pages/admin/Item/Store/List/Index';
import BrandEditPage from '../pages/admin/Item/Store/Edit/Index';
import AdminErollPage from '../pages/admin/faqPage/enroll/Index';
import AdminEditPage from '../pages/admin/faqPage/edit/Index';
import AdminDirectAskPage from '../pages/admin/directAskPage/list/Index';
import AdminAskEnrollPage from '../pages/admin/directAskPage/enroll/Index';


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
                <Route path="cancel" element={<AdminCancelList />} />
                <Route path="cancel/:id" element={<AdminCancelDetail/>} />
                {/* 고객센터 */}
                {/* faq */}
                <Route path="faq" element={<AdminFaqListPage/>}/>
                <Route path="faq/:faqId" element={<AdminEditPage/>}/>
                <Route path="faq/enroll" element={<AdminErollPage/>}/>
                {/* 1:1문의 */}
                <Route path="directask" element={<AdminDirectAskPage/>}/>
                <Route path="directask/:askId" element={<AdminAskEnrollPage/>}/>
                
                
                {/* </Route> */}
            </Route>


            <Route path="mileage" element={<AdminMileageView />} />

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
