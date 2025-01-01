import React from "react";
import TaskTracker from "./TaskTracker";

function TaskTrackerContainer({ taskCounts }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mt-12">
      <TaskTracker
        title="Active Tasks"
        count={taskCounts.activeCount}
      />
      <TaskTracker
        title="New Tasks"
        count={taskCounts.newTaskCount}
      />
      <TaskTracker
        title="Completed Tasks"
        count={taskCounts.completedCount}
      />
      <TaskTracker
        title="Failed Tasks"
        count={taskCounts.failedCount}
      />
    </div>
  );
}

export default TaskTrackerContainer;
