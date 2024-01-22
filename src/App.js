import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoutes";
import UserRoute from "./routes/UserRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route path="/user/*" element={<UserRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;