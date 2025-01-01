import React, { useId } from "react";

function TaskInput({
  label,
  handleInputChange,
  task,
  name,
  placeholder,
  type = "text",
  required = true,
  className,
  ...rest
}) {
  const id = useId();
  return (
    <div className="flex flex-col max-w-full">
      <label className="create-task-label" htmlFor={id}>
        {label}
      </label>
      <input
        required={required}
        onChange={handleInputChange}
        value={task[name]}
        className={`create-task-input hover-effect ${className}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default TaskInput;
