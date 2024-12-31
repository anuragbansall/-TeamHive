import React from "react";
import TaskInput from "./TaskInput";

function CreateTask() {
  const [task, setTask] = React.useState({
    title: "",
    description: "",
    deadline: "",
    assignTo: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    setTask({
      title: "",
      description: "",
      deadline: "",
      assignTo: "",
      category: "",
    });
  };

  return (
    <div className="max-w-full mt-10">
      <form
        className="flex flex-wrap w-full max-w-full mx-auto justify-center gap-x-10"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col max-w-full">
          <TaskInput
            label="Task Title"
            handleInputChange={handleInputChange}
            task={task}
            name="title"
            placeholder="Make a UI Design"
            type="text"
          />
          <TaskInput
            label="Task Deadline"
            handleInputChange={handleInputChange}
            task={task}
            name="deadline"
            type="date"
          />
          <TaskInput
            label="Assign To"
            handleInputChange={handleInputChange}
            task={task}
            name="assignTo"
            placeholder="John Doe"
            type="text"
          />
          <TaskInput
            label="Category"
            handleInputChange={handleInputChange}
            task={task}
            name="category"
            placeholder="UI/UX"
            type="text"
          />
        </div>
        <div className="flex flex-col max-w-full">
          <label className="create-task-label" htmlFor="description">
            Description
          </label>
          <textarea
            required
            onChange={handleInputChange}
            value={task.description}
            className="create-task-input hover-effect h-full max-h-[20rem] resize-none"
            id="description"
            name="description"
            placeholder="Design a UI for the website"
          />
          <button className="bg-zinc-950 border border-zinc-800 max-w-full text-white font-semibold text-xl p-3 rounded-md hover-effect">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
