import React, { useContext } from "react";
import Header from "./Header";
import Container from "../Common/Container";
import TaskTracker from "./TaskTracker";
import TaskInfo from "./TaskInfo";
import TaskInfoContainer from "./TaskInfoContainer";
import TaskTrackerContainer from "./TaskTrackerContainer";
import { AuthContext } from "../../context/AuthProvider";

function EmployeeDashboard({ handleLogout, userData }) {
  const { authData } = useContext(AuthContext);
  const { name, id, email, password } = userData;
  const { taskCounts, tasks } = authData.employees?.find(
    (emp) => emp.name === name
  );

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-6">
      <Container>
        <Header handleLogout={handleLogout} userName={name} />
        <TaskTrackerContainer taskCounts={taskCounts} />
        <TaskInfoContainer tasks={tasks} />
      </Container>
    </div>
  );
}

export default EmployeeDashboard;
