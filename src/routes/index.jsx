import { Navigate, Route, Routes } from "react-router-dom";
import HubPage from "../pages/hubPage/hubPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/landingPage" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/userHub" element={<HubPage />} />
    <Route path="*" element={<Navigate to="/landingPage" />} />
  </Routes>
);

export default RoutesMain;
