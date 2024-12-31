import React from "react";
import TaskInfo from "./TaskInfo";

function TaskInfoContainer() {
  return (
    <div className="mt-12 w-full flex overflow-x-auto snap-x gap-4">
      <TaskInfo bgColor="yellow" />
      <TaskInfo bgColor="red" />
      <TaskInfo bgColor="pink" />
      <TaskInfo bgColor="sky" />
    </div>
  );
}

export default TaskInfoContainer;
