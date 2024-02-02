import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoutes";
import UserRoute from "./routes/UserRoutes";
import LoginPage from "@userPages/Login/Index";
import AdminLoginPage from "@userPages/Login/AdminIndex";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="login/admin" element={<AdminLoginPage />} />

          <Route path="/user/*" element={<UserRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
