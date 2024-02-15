import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoutes";
import UserRoute from "./routes/UserRoutes";
import LoginPage from "@userPages/Login/Index";
import AdminLoginPage from "@userPages/Login/AdminIndex";
import SignPage from "@userPages/Sign/Index";
import FindPasswordPage from "@userPages/Login/FindPassword";
import withAuth from "@utils/hoc/withAuth";

function App() {
  const AuthenticatedUserRoute = withAuth(UserRoute);
  const AuthenticatedAdminRoute = withAuth(AdminRoute);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 로그인, 회원가입, 비밀번호 찾기 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="login/admin" element={<AdminLoginPage />} />
          <Route path="/user/sign" element={<SignPage />} />
          <Route path="/user/findpassword" element={<FindPasswordPage />} />

          <Route path="/user/*" element={<AuthenticatedUserRoute />} />
          <Route path="/admin/*" element={<AuthenticatedAdminRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
