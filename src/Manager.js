import React, { useState } from "react";
import "./Manager.css";

function Manager() {
  const [users, setUsers] = useState([
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", role: "Manager", status: "Active" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "Reception", status: "Inactive" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com", role: "Manager", status: "Active" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Reception", status: "Active" });

  const handleAddUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", email: "", role: "Reception", status: "Active" });
  };

  const handleEditUser = () => {
    setUsers(users.map((user) => (user.id === editingUser.id ? editingUser : user)));
    setIsEditing(false);
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="manager-container">
      <div className="header">
        <h1>Quản lý Nhân viên</h1>
        <p>Danh sách và quản lý nhân viên</p>
      </div>

      <div className="grid-container">
        <div className="user-list">
          <h3>Danh sách Nhân viên</h3>
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                className={`user-item ${user.status === "Inactive" ? "inactive" : ""}`}
              >
                <span className="user-info">{user.name} ({user.role})</span>
                <div className="button-group">
                  <button className="btn-edit" onClick={() => { setIsEditing(true); setEditingUser(user); }}>Chỉnh sửa</button>
                  <button className="btn-delete" onClick={() => handleDeleteUser(user.id)}>Xóa</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="user-form">
          <h3>{isEditing ? "Cập nhật Nhân viên" : "Thêm Nhân viên mới"}</h3>
          <form>
            <input
              type="text"
              placeholder="Tên"
              value={isEditing ? editingUser.name : newUser.name}
              onChange={(e) =>
                isEditing
                  ? setEditingUser({ ...editingUser, name: e.target.value })
                  : setNewUser({ ...newUser, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={isEditing ? editingUser.email : newUser.email}
              onChange={(e) =>
                isEditing
                  ? setEditingUser({ ...editingUser, email: e.target.value })
                  : setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
            <select
              value={isEditing ? editingUser.role : newUser.role}
              onChange={(e) =>
                isEditing
                  ? setEditingUser({ ...editingUser, role: e.target.value })
                  : setNewUser({ ...newUser, role: e.target.value })
              }
            >
              <option value="Manager">Manager</option>
              <option value="Reception">Reception</option>
            </select>
            <select
              value={isEditing ? editingUser.status : newUser.status}
              onChange={(e) =>
                isEditing
                  ? setEditingUser({ ...editingUser, status: e.target.value })
                  : setNewUser({ ...newUser, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button type="button" className="btn-save" onClick={isEditing ? handleEditUser : handleAddUser}>
              {isEditing ? "Cập nhật" : "Thêm mới"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Manager;
