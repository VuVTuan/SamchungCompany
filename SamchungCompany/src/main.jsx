import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Main/MainStyle.css";
import logo from "./assets/CompanyLogo.png";
import FirstDashboardIMG from "./assets/FirstDashboardIMG.png";
import Introduce from "./Main/Introduce/Introduction";
// import ProductsPage from "./ProductsPage";
// import ContactPage from "./ContactPage";

const HomePage = () => (
  <div
    className="img-section"
    style={{
      backgroundImage: `url(${FirstDashboardIMG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      position: "relative",
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

        <nav className="nav-bar nav-bar-header">
          <ul>
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/introduction">GIỚI THIỆU</Link></li>
            <li><Link to="/products">SẢN PHẨM</Link></li>
            <li><Link to="/contact">LIÊN HỆ</Link></li>
          </ul>
        </nav>
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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/introduction" element={<Introduce />} />
      {/* <Route path="/san-pham" element={<ProductsPage />} />
      <Route path="/lien-he" element={<ContactPage />} /> */}
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
