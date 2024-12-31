import React, { useContext } from "react";
import Header from "./Header";
import Container from "../Common/Container";
import CreateTask from "./CreateTask";
import { AuthContext } from "../../context/AuthProvider";
import TaskInfoContainer from "./TaskInfoContainer";
import UsersInfoContainer from "./UsersInfoContainer";

function AdminDashboard({ handleLogout, userData }) {
  const authData = useContext(AuthContext);
  const { id, email, name, password, tasks } = userData;
  return (
    <div className="min-h-screen w-full p-6">
      <Container>
        <Header handleLogout={handleLogout} userName={name} />
        <CreateTask />
      </Container>
      <UsersInfoContainer usersData={authData.employees} />
    </div>
  );
}

export default AdminDashboard;
