import React, { useState } from "react";
import "./Reception.css";

function Reception() {
  const [users, setUsers] = useState([
    { id: 1, name: "Nguyễn Văn A", email: "vana@gmail.com", phone: "0123456789", status: "Đã kích hoạt" },
    { id: 2, name: "Trần Thị B", email: "thib@gmail.com", phone: "0987654321", status: "Chưa kích hoạt" },
    { id: 3, name: "Lê Văn C", email: "vanc@gmail.com", phone: "0912345678", status: "Đã kích hoạt" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState(null);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwords, setPasswords] = useState({ newPassword: "" });

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setUpdatedInfo({ ...user });
    setEditMode(true);
  };

  const handleSaveInfo = () => {
    setUsers(users.map((user) => (user.id === updatedInfo.id ? updatedInfo : user)));
    setEditMode(false);
    setSelectedUser(null);
  };

  const handleChangePassword = () => {
    console.log("Đổi mật khẩu:", passwords);
    setShowPasswordChange(false);
    setPasswords({ newPassword: "" });
  };

  return (
    <div className="reception-container">
      <div className="header">
        <h1>Quản Lý Người Dùng</h1>
        <p>Danh sách người dùng và các hành động hỗ trợ</p>
      </div>
      <div className="grid-container">
        {/* Danh sách người dùng */}
        <div className="card user-list-card">
          <h3>Danh Sách Người Dùng</h3>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id} className={`user-item ${user.status === "Chưa kích hoạt" ? "inactive" : ""}`}>
                <span className="user-info">
                  <strong>{user.name}</strong> ({user.status})
                </span>
                <button className="btn-edit" onClick={() => handleEditUser(user)}>
                  Cập nhật
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chi tiết người dùng */}
        {selectedUser && (
          <div className="card user-details-card">
            <h3>Thông Tin Người Dùng</h3>
            {editMode ? (
              <div className="edit-user">
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
                  <button className="btn-save" onClick={handleSaveInfo}>
                    Lưu
                  </button>
                  <button className="btn-cancel" onClick={() => setEditMode(false)}>
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="user-info-display">
                <p>
                  <strong>Tên:</strong> {selectedUser.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {selectedUser.phone}
                </p>
                <button className="btn-edit" onClick={() => setEditMode(true)}>
                  Cập nhật thông tin
                </button>
              </div>
            )}

            {/* Đổi mật khẩu */}
            <div className="password-section">
              <h4>Đổi Mật Khẩu</h4>
              {showPasswordChange ? (
                <div className="change-password-form">
                  <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    value={passwords.newPassword}
                    onChange={(e) => setPasswords({ newPassword: e.target.value })}
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
        )}
      </div>
    </div>
  );
}

export default Reception;
