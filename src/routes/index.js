import LoginPage from "@userPages/Login/Index";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLoginPage from "@userPages/Login/AdminIndex";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={LoginPage} />
        <Route path="/login/admin" element={AdminLoginPage} />

        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
