import text from "../../assets/Introudciton.text?raw";
import CompanyLogo from "../../assets/CompanyLogo.png";
import img from "../../assets/FirstDashboardIMG.png";
import React from "react";
import "../Introduce/IntroPage.css";
function Introduce({ Navbar }) {
  return (
    <section className="intro-layout">
      {/* Header */}
      <header className="intro-header">
        <div className="logo-top-left">
          <img src={CompanyLogo} alt="Samchung Logo" className="logo" />
        </div>

        <div className="company-info">
          <h1>DẬP LY SAMCHUNG</h1>
          <p>Địa chỉ: 139/2 khu phố Bình Phước A, phường An Phú. TP.HCM</p>
        </div>

        {Navbar && <Navbar />}
      </header>

      {/* First row */}
      <div className="intro-row">
        <div className="intro-image-box">
          <img src={img} alt="Company Logo" />
        </div>
        <div className="briefly-introduce">
          <h2>SƠ LƯỢC VỀ CÔNG TY</h2>
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </div>
      </div>
      
      {/* Second row */}
      <div className="intro-row">
        <div className="briefly-introduce">
          <h2>SƠ LƯỢC VỀ CÔNG TY</h2>
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </div>

        <div className="intro-image-box">
          <img src={img} alt="Company Logo" />
        </div>
      </div>
      
      
      {/* Third row */}
      <div className="intro-row">
        <div className="intro-image-box">
          <img src={img} alt="Company Logo" />
        </div>
        <div className="briefly-introduce">
          <h2>SƠ LƯỢC VỀ CÔNG TY</h2>
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </div>
      </div>
    </section>
    
  );
}

export default Introduce;