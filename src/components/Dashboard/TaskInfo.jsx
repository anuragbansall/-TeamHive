import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function TaskInfo({ task }) {
  const { authData, updateEmployees } = useContext(AuthContext);

  const getBgColor = () => {
    if (task.isActive) return "green";
    if (task.isNewTask) return "blue";
    if (task.isCompleted) return "yellow";
    if (task.isFailed) return "red";
    return "gray";
  };

  const updateTaskStatus = (id, status) => {
    const newEmployees = authData.employees.map((employee) => {
      const newTasks = employee.tasks.map((t) => {
        if (t.id === id) {
          const updatedTask = {
            ...t,
            isCompleted: status === "completed",
            isFailed: status === "failed",
            isActive: false,
            isNewTask: false,
          };
          return updatedTask;
        }
        return t;
      });
  
      // Recalculate taskCounts for the employee
      const taskCounts = newTasks.reduce(
        (counts, task) => {
          if (task.isActive) counts.activeCount += 1;
          if (task.isNewTask) counts.newTaskCount += 1;
          if (task.isCompleted) counts.completedCount += 1;
          if (task.isFailed) counts.failedCount += 1;
          return counts;
        },
        { activeCount: 0, newTaskCount: 0, completedCount: 0, failedCount: 0 }
      );
  
      return { ...employee, tasks: newTasks, taskCounts };
    });
  
    updateEmployees(newEmployees);
  };
  

  return (
    <div
      className={`max-w-[25rem] snap-start bg-${getBgColor()}-500 hover:brightness-105 flex-shrink-0 flex flex-col gap-2 w-full p-4 pb-6 text-white rounded-xl my-4 cursor-pointer`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="bg-red-600 p-2 rounded-md font-semibold">
          {task?.category}
        </span>
        <p className="font-semibold">{task?.deadline}</p>
      </div>
      <h3 className="text-2xl font-semibold">{task?.title}</h3>
      <p className="text-lg mb-4">{task?.description}</p>
      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
        <button
          className="px-4 py-2 font-semibold border-2 rounded-full hover:bg-green-400 focus:bg-green-400 hover:border-transparent"
          onClick={() => updateTaskStatus(task.id, "completed")}
        >
          Mark as Done
        </button>
        <button
          className="px-4 py-2 font-semibold border-2 rounded-full hover:bg-red-600 focus:bg-red-600 hover:border-transparent"
          onClick={() => updateTaskStatus(task.id, "failed")}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default TaskInfo;
