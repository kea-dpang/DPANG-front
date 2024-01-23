import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";

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

