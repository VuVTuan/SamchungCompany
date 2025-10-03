import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Main/MainStyle.css";

const ControlSystem = () => {
  return (
    <div className="control-container">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>
              CÔNG TY TRÁCH NHIỆM HỮU HẠN <br />
              MỘT THÀNH VIÊN SAMCHUNG
            </h1>
            <p>Chuyên: Gia công dập ly</p>
          </div>
        </div>
      </section>

      {/* Extra content to test scroll */}
      <div className="demo-content"></div>

      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ControlSystem />
  </React.StrictMode>
);

export default ControlSystem;
