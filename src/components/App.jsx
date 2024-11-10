import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import "../assets/scss/styles.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Ais from "./pages/Ais/Ais";
import ContentGenerators from "./pages/Ais/Content_Generators/ContentGenerators";
import AnalysisTools from "./pages/Ais/Analysis_Tools/AnalysisTools";
import VirtualAssistants from "./pages/Ais/Virtual_Assistants/VirtualAssistants";
import Innovations from "./pages/Ais/Innovations/Innovations";
import MlPlatforms from "./pages/Ais/ML_Platforms/MlPlatforms";
import Docs from "./pages/Documentation/Docs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";

export const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

  return (
    <div className="container_all">
      <PrimeReactProvider>
        {/* Renderiza el Header solo si la ruta actual no está en hideHeaderRoutes */}
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ais" element={<Ais />} />
          <Route path="/docs" element={<Docs />} />
          <Route
            path="/profile"
            element={
              <AuthMiddleware>
                <Profile />
              </AuthMiddleware>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/content-generators" element={<ContentGenerators />} />
          <Route path="/analysis-tools" element={<AnalysisTools />} />
          <Route path="/virtual-assistants" element={<VirtualAssistants />} />
          <Route path="/ai-innovations" element={<Innovations />} />
          <Route path="/machine-learning-platforms" element={<MlPlatforms />} />
        </Routes>
      </PrimeReactProvider>
    </div>
  );
};
