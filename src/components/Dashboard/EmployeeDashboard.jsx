import React from "react";
import Header from "./Header";
import Container from "../Common/Container";
import TaskTracker from "./TaskTracker";
import TaskInfo from "./TaskInfo";
import TaskInfoContainer from "./TaskInfoContainer";

function EmployeeDashboard() {
  return (
    <div className="bg-[#1c1c1c] min-h-screen p-6">
      <Container>
        <Header />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mt-12">
          <TaskTracker bgColor="red" />
          <TaskTracker bgColor="sky" />
          <TaskTracker bgColor="green" />
          <TaskTracker bgColor="yellow" />
        </div>
        <TaskInfoContainer />
      </Container>
    </div>
  );
}

export default EmployeeDashboard;
