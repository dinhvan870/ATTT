import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [userRole, setUserRole] = useState("Admin"); // Giả sử user role là Admin
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho useHistory

  const navigateToProfile = () => {
    navigate("/profile"); // Dùng navigate thay cho history.push
  };

  const navigateToSettings = () => {
    navigate("/settings"); // Dùng navigate thay cho history.push
  };

  const navigateToManagement = () => {
    if (userRole === "Admin") {
      navigate("/admin"); // Dùng navigate thay cho history.push
    } else if (userRole === "Reception") {
      navigate("/reception"); // Dùng navigate thay cho history.push
    } else if (userRole === "Customer") {
      navigate("/customer"); // Dùng navigate thay cho history.push
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Trang Chủ</h1>
        <p>Chào mừng bạn đến với hệ thống quản lý.</p>
      </div>

      <div className="menu">
        <h3>Menu Điều Hướng</h3>
        <ul>
          <li onClick={navigateToProfile} className="menu-item">
            <span>Thông tin cá nhân</span>
          </li>
          <li onClick={navigateToManagement} className="menu-item">
            <span>Quản lý tài khoản</span>
          </li>
          <li onClick={navigateToSettings} className="menu-item">
            <span>Cài đặt</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
