import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Main/MainStyle.css";
import FirstDashboardIMG from "./assets/FirstDashboardIMG.png";
import SecDashboardIMG from "./assets/SecDashboardIMG.png";
import BriefIntroduce from "./Main/Home/BrieflyIntroduce";

const carouselItems = [
  {image: FirstDashboardIMG,},
  {image: SecDashboardIMG,},
];

const ControlSystem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="control-container">
      <Header />

      {/* Hero Section with carousel */}
      <section className="img">
        <div
          className="img-carousel"
          style={{
            backgroundImage: `url(${currentItem.image})`,
            transition: "background-image 1s ease-in-out",
          }}
        >   
        </div>
      </section>

      <BriefIntroduce/>

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