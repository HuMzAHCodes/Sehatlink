import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorDetailPage from "./pages/DoctorDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialty" element={<DoctorsPage />} />
        <Route
          path="/doctors/:specialty/:doctorId"
          element={<DoctorDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
