import React, { useState } from "react";
import "./Admin.css";


function Admin() {
    const [users, setUsers] = useState([
      { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", status: "Active", role: "Manager" },
      { id: 2, name: "Trần Thị B", email: "b@gmail.com", status: "Inactive", role: "Reception" },
      { id: 3, name: "Lê Văn C", email: "c@gmail.com", status: "Active", role: "Manager" },
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
      <div className="admin-container">
        <h2>Quản lý Nhân viên</h2>
        <div className="content-wrapper">
          <div className="user-table">
            <h3>Danh sách nhân viên</h3>
            <ul className="user-list">
              {users.map((user) => (
                <li key={user.id} className="user-item">
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-actions">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setIsEditing(true);
                          setEditingUser(user);
                        }}
                      >
                        Chỉnh sửa
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>
                        Xóa
                      </button>
                    </span>
                  </div>
                  <div className="user-details">
                    <span>Email: {user.email}</span> | <span>Quyền: {user.role}</span> | <span>Trạng thái: {user.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="form-container">
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
              <button type="button" onClick={isEditing ? handleEditUser : handleAddUser}>
                {isEditing ? "Cập nhật" : "Thêm mới"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Admin;