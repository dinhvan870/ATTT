import React, { useState } from "react";
import "./Customer.css";

function Customer() {
    const [userInfo, setUserInfo] = useState({
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      phone: "0123456789",
    });
  
    const [history, setHistory] = useState([
      { id: 1, date: "2024-11-01", action: "Mua sản phẩm X" },
      { id: 2, date: "2024-11-10", action: "Đổi sản phẩm Y" },
      { id: 3, date: "2024-11-15", action: "Nhận voucher giảm giá" },
    ]);
  
    const [editMode, setEditMode] = useState(false);
    const [updatedInfo, setUpdatedInfo] = useState({ ...userInfo });
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
  
    const handleUpdateInfo = () => {
      setUserInfo({ ...updatedInfo });
      setEditMode(false);
    };
  
    const handleChangePassword = () => {
      console.log("Đổi mật khẩu:", passwords);
      setShowPasswordChange(false);
      setPasswords({ oldPassword: "", newPassword: "" });
    };
  
    return (
      <div className="customer-container">
        <div className="header">
          <h1>Hồ Sơ Khách Hàng</h1>
          <p>Quản lý thông tin cá nhân và lịch sử hoạt động</p>
        </div>
        <div className="grid-container">
          {/* Thông tin cá nhân */}
          <div className="card info-card">
            <h3>Thông Tin Cá Nhân</h3>
            {editMode ? (
              <div className="edit-info">
                <input
                  type="text"
                  value={updatedInfo.name}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
                  placeholder="Tên"
                />
                <input
                  type="email"
                  value={updatedInfo.email}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={updatedInfo.phone}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, phone: e.target.value })}
                  placeholder="Số điện thoại"
                />
                <div className="button-group">
                  <button className="btn-save" onClick={handleUpdateInfo}>
                    Lưu
                  </button>
                  <button className="btn-cancel" onClick={() => setEditMode(false)}>
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="info-display">
                <p>
                  <strong>Tên:</strong> {userInfo.name}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {userInfo.phone}
                </p>
                <button className="btn-edit" onClick={() => setEditMode(true)}>
                  Cập nhật thông tin
                </button>
              </div>
            )}
          </div>
  
          {/* Lịch sử hoạt động */}
          <div className="card history-card">
            <h3>Lịch Sử Hoạt Động</h3>
            <ul className="history-list">
              {history.map((item) => (
                <li key={item.id}>
                  <span className="date">{item.date}</span>
                  <span className="action">{item.action}</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Đổi mật khẩu */}
          <div className="card password-card">
            <h3>Đổi Mật Khẩu</h3>
            {showPasswordChange ? (
              <div className="change-password-form">
                <input
                  type="password"
                  placeholder="Mật khẩu cũ"
                  value={passwords.oldPassword}
                  onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Mật khẩu mới"
                  value={passwords.newPassword}
                  onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                />
                <div className="button-group">
                  <button className="btn-save" onClick={handleChangePassword}>
                    Đổi mật khẩu
                  </button>
                  <button className="btn-cancel" onClick={() => setShowPasswordChange(false)}>
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <button className="btn-edit" onClick={() => setShowPasswordChange(true)}>
                Đổi mật khẩu
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Customer;
