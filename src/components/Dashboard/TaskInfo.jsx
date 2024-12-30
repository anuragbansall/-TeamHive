import React from "react";

function TaskInfo({ bgColor }) {
  return (
    <div
      className={`w-[26rem] bg-${bgColor}-500 hover:brightness-105 flex-shrink-0 flex flex-col gap-2 w-full p-4 pb-12 text-white rounded-xl my-4 cursor-pointer`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="bg-red-600 p-2 rounded-md font-semibold">High</span>
        <p className="font-semibold">20 Feb 2024</p>
      </div>
      <h3 className="text-2xl font-semibold">Example Task</h3>
      <p className="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni optio
        eum temporibus nulla incidunt deserunt similique sed amet suscipit
        sapiente!
      </p>
    </div>
  );
}

export default TaskInfo;
