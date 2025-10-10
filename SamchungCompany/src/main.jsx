import React from "react";
import ReactDOM from "react-dom/client";
import "./Main/MainStyle.css";
import logo from "./assets/CompanyLogo.png";
import FirstDashboardIMG from "./assets/FirstDashboardIMG.png";

const ControlSystem = () => (
  <div className="hero-section" style={{
    backgroundImage: `url(${FirstDashboardIMG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative"
  }}>
    <div className="hero-overlay">

      <div className="hero-header-row">

        <div className="logo-top-left">
          <img src={logo} alt="Samchung Logo" className="logo" />
        </div>

        <div className="company-info">
          <h1>DẬP LY SAMCHUNG</h1>
          <p>Địa chỉ: 139/2 khu phố Bình Phước A, phường An Phú. TP.HCM</p>
        </div>

        <nav className="nav-bar nav-bar-header">
          <ul>
            <li>TRANG CHỦ</li>
            <li>GIỚI THIỆU</li>
            <li>SẢN PHẨM</li>
            <li>LIÊN HỆ</li>
          </ul>
        </nav>

      </div>
      
      <div className="hero-header-content">
        
        <div className="hotline">
          CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN SAMCHUNG <br />
          <strong>Chuyên: Gia công dập ly</strong> 
        </div>
      </div>  

      <div className="bottom-left-button">
        <button className="primary-btn">Liên hệ ngay</button>
      </div>
      

    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ControlSystem />
  </React.StrictMode>
);

export default ControlSystem;