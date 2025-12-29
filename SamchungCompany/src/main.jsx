import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./Main/MainStyle.css";
import logo from "./assets/CompanyLogo.png";
import FirstDashboardIMG from "./assets/FirstDashboardIMG.png";
import SecondDashboardIMG from "./assets/SecondDashboardIMG.png";
import Introduce from "./Main/Introduce/Introduction";

// =================================
// Navbar (shared across pages)
// =================================
const Navbar = () => (
  <nav className="nav-bar nav-bar-header">
    <ul>
      <li><Link to="/">TRANG CHỦ</Link></li>
      <li><Link to="/introduction">GIỚI THIỆU</Link></li>
      <li><Link to="/products">SẢN PHẨM</Link></li>
      <li><Link to="/contact">LIÊN HỆ</Link></li>
    </ul>
  </nav>
);

// =================================
// Loading Screen Component
// =================================
const LoadingScreen = () => (
  <div className="loading-overlay">
    <div className="loading-content">
      <img src={logo} alt="Samchung Logo" className="loading-logo" />
      <p>Đang tải...</p>
    </div>
  </div>
);

// =================================
// Wrapper that shows loader on route change
// =================================
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && children}
    </>
  );
};

// =================================
// Home Page
// =================================
const HomePage = () => {
  const [currentBG, setCurrentBG] = useState(FirstDashboardIMG);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBG((prev) =>
        prev === FirstDashboardIMG ? SecondDashboardIMG : FirstDashboardIMG
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="img-section"
      style={{
        backgroundImage: `url(${currentBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="img-overlay">
        <div className="img-header-row">
          <div className="logo-top-left">
            <img src={logo} alt="Samchung Logo" className="logo" />
          </div>

          <div className="company-info">
            <h1>DẬP LY SAMCHUNG</h1>
            <p>Địa chỉ: 139/2 khu phố Bình Phước A, phường An Phú. TP.HCM</p>
          </div>

          <Navbar />
        </div>

        <div className="intro-content">
          <div className="intro">
            CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN SAMCHUNG
            <br />
            <br />
            <strong>Chuyên: Gia công dập ly theo yêu cầu</strong>
          </div>
        </div>

        <div className="bottom-left-button">
          <button className="primary-btn">Liên hệ ngay</button>
        </div>
      </div>
    </div>
  );
};

// =================================
// Main App with Loader + Navbar passed to Introduce
// =================================
const App = () => (
  <Router>
    <PageWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<Introduce Navbar={Navbar} />} />
      </Routes>
    </PageWrapper>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
