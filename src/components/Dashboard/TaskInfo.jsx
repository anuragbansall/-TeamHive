import React from "react";

function TaskInfo({ task }) {
  let bgColor = "";
  if (task.isActive) {
    bgColor = "green";
  } else if (task.isNewTask) {
    bgColor = "blue";
  } else if (task.isCompleted) {
    bgColor = "yellow";
  } else if (task.isFailed) {
    bgColor = "red";
  }
  return (
    <div
      className={`max-w-[25rem] snap-start bg-${bgColor}-500 hover:brightness-105 flex-shrink-0 flex flex-col gap-2 w-full p-4 pb-6 text-white rounded-xl my-4 cursor-pointer`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="bg-red-600 p-2 rounded-md font-semibold">
          {task?.category}
        </span>
        <p className="font-semibold">{task?.date}</p>
      </div>
      <h3 className="text-2xl font-semibold">{task?.title}</h3>
      <p className="text-lg">{task?.description}</p>
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 font-semibold border-2 rounded-full hover:bg-green-400 focus:bg-green-400 hover:border-transparent">Mark as Done</button>
        <button className="px-4 py-2 font-semibold border-2 rounded-full hover:bg-red-600 focus:bg-red-600 hover:border-transparent">Mark as Failed</button>
      </div>
    </div>
  );
}

export default TaskInfo;
