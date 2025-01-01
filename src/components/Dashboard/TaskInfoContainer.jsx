import React from "react";
import TaskInfo from "./TaskInfo";

function TaskInfoContainer({ tasks }) {
  tasks;
  return (
    <div className="mt-12 w-full flex overflow-x-auto snap-x gap-4">
      {tasks?.map((task) => (
        <TaskInfo key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskInfoContainer;
