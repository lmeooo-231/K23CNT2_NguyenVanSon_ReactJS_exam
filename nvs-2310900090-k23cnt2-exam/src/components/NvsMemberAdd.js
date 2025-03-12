import React, { useState } from "react";

const NvsMemberAdd = ({ addMember }) => {
  // State lưu thông tin thành viên mới
  const [newMember, setNewMember] = useState({ id: "", fullname: "", username: "", password: "" });

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  // Hàm xử lý khi gửi form thêm thành viên
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMember.id && newMember.fullname && newMember.username && newMember.password) {
      addMember(newMember);
      setNewMember({ id: "", fullname: "", username: "", password: "" });
    }
  };

  return (
    <div>
      <h2>Thêm thành viên</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={newMember.id} onChange={handleChange} required />
        <input type="text" name="fullname" placeholder="Họ và tên" value={newMember.fullname} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={newMember.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mật khẩu" value={newMember.password} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default NvsMemberAdd;