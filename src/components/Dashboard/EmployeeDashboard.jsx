import React from "react";
import Header from "./Header";
import Container from "../Common/Container";
import TaskTracker from "./TaskTracker";
import TaskInfo from "./TaskInfo";
import TaskInfoContainer from "./TaskInfoContainer";
import TaskTrackerContainer from "./TaskTrackerContainer";

function EmployeeDashboard({ handleLogout, userData }) {
  const { id, email, name, password, tasks, taskCounts } = userData;
  console.log(tasks[0]);
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
