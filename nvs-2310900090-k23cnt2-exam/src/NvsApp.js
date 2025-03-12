import React, { useState } from "react";
import NvsMemberList from "./components/NvsMemberList";
import NvsMemberAdd from "./components/NvsMemberAdd";

const NvsApp = () => {
  // Khởi tạo danh sách thành viên với state
  const [members, setMembers] = useState([
    { id: "2310900090", fullname: "Nguyễn Văn Sơn", username: "nguyenvanson", password: "123456" },
    { id: "54321", fullname: "Nguyễn Văn B", username: "nguyenvanb", password: "654321" },
    { id: "98765", fullname: "Nguyễn Thị C", username: "nguyenthic", password: "567890" },
  ]);

  // Hàm thêm thành viên mới
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Hàm xóa thành viên theo ID
  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
  };

  return (
    <div>
      <h1>Danh sách thành viên</h1>
      <NvsMemberList members={members} removeMember={removeMember} updateMember={updateMember}/>
      <NvsMemberAdd addMember={addMember} />
    </div>
  );
};

export default NvsApp;