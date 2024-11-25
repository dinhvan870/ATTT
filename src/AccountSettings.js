import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountSettings.css"; // Thêm file CSS tùy chỉnh cho giao diện

function AccountSettings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hàm xử lý cập nhật thông tin tài khoản
  const handleUpdate = (e) => {
    e.preventDefault();
    // Xử lý cập nhật thông tin tài khoản tại đây
    console.log("Thông tin đã được cập nhật:", { username, email, password });
    alert("Cập nhật thành công!");
  };

  // Hàm quay lại trang chủ
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="account-settings-container">
      <h1>Cài Đặt Tài Khoản</h1>
      
      <form className="account-settings-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="username">Tên người dùng:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên người dùng"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Cập nhật
          </button>
          <button type="button" className="btn-secondary" onClick={handleBack}>
            Quay lại
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountSettings;
