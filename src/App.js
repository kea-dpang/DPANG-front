import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/admin/eventPage/Index"
import EventListPage from "./pages/admin/eventPage/list/Index"
import EventEnrollPage from "./pages/admin/eventPage/enroll/Index"
import EventEditPage from "./pages/admin/eventPage/edit/Index"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 관리자 이벤트 페이지 */}
          <Route path="/admin/event" element={<EventPage />}>
              <Route path="list" element={<EventListPage/>}/>
              <Route path="enroll" element={<EventEnrollPage />}/>
              <Route path="edit" element={<EventEditPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
