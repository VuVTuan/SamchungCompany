import "../Components/ComponentStyle.css";
import logo from "../assets/CompanyLogo.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="header-left">
          <img src={logo} alt="Samchung Logo" className="logo" />
        </div>
        <div className="company-info">
          <h1>DẬP LY SAMCHUNG</h1>
          <p>Địa chỉ: 139/2 khu phố Bình Phước A, phường An Phú. TP.HCM</p>
        </div>
        <div className="header-right">
          <div className="hotline-frame">
            <p className="hotline">
              HOTLINE
              <br />
              <strong>0982 331 661</strong><br />
              <strong>0973 881 229</strong>
            </p>
          </div>
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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
