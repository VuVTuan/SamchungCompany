import "../Components/ComponentStyle.css";
import logo from "../assets/CompanyLogo.png"; // Replace with your actual logo file

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <img src={logo} alt="Samchung Logo" className="logo" />
        <div className="company-info">
          <h1>DẬP LY SAMCHUNG</h1>
          <p>
            Địa chỉ: 139/2 khu phố Bình Phước A, phường An Phú. TP.HCM <br />
            <strong>0982331661</strong>
          </p>
        </div>
      </div>

      <nav className="nav-bar">
        <ul>
          <li>TRANG CHỦ</li>
          <li>GIỚI THIỆU</li>
          <li>SẢN PHẨM</li>
          <li>LIÊN HỆ</li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Tìm kiếm" />
          <button>
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
