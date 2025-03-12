import React, { useState } from "react";

const NvsMemberList = ({ members, removeMember, updateMember }) => {
  const [editMember, setEditMember] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ fullname: "", username: "", password: "" });

  // Hàm bắt đầu chỉnh sửa thông tin thành viên
  const handleEdit = (member) => {
    setEditMember(member.id);
    setUpdatedInfo({ fullname: member.fullname, username: member.username, password: member.password });
  };

  // Hàm lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateMember({ id: editMember, ...updatedInfo });
    setEditMember(null);
  };

  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {editMember === member.id ? (
              // Hiển thị form chỉnh sửa nếu thành viên đang được chỉnh sửa
              <>
                <input type="text" value={updatedInfo.fullname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, fullname: e.target.value })} />
                <input type="text" value={updatedInfo.username} onChange={(e) => setUpdatedInfo({ ...updatedInfo, username: e.target.value })} />
                <input type="password" value={updatedInfo.password} onChange={(e) => setUpdatedInfo({ ...updatedInfo, password: e.target.value })} />
                <button onClick={handleUpdate}>Lưu</button>
              </>
            ) : (
              // Hiển thị thông tin thành viên nếu không chỉnh sửa
              <>
                {member.fullname} ({member.username})
                <button onClick={() => handleEdit(member)}>Sửa</button>
                <button onClick={() => removeMember(member.id)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NvsMemberList;