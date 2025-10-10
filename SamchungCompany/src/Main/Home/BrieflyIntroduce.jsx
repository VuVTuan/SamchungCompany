import text from "../../assets/Introudciton.text?raw";
import CompanyLogo from "../../assets/FirstDashboardIMG.png"; // Example image

function BrieflyIntroduce() {
  return (
    <section className="intro-layout">
      {/* First row */}
      <div className="intro-row">
        <div className="intro-image-box">
          <img src={CompanyLogo} alt="Company Logo" />
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
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
      </div>
      
      
      {/* Third row */}
      <div className="intro-row">
        <div className="intro-image-box">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
        <div className="briefly-introduce">
          <h2>SƠ LƯỢC VỀ CÔNG TY</h2>
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </div>
      </div>
    </section>
    
  );
}

export default BrieflyIntroduce;