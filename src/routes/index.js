import LoginPage from "@userPages/Login/Index";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import NotFoundPage from "@components/NotFound/Index";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLoginPage from "@userPages/Login/AdminIndex";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFoundPage />} />
        <Route path="/login" element={LoginPage} />
        <Route path="/login/admin" element={AdminLoginPage} />

        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
