import React, { useContext, useState, useEffect } from "react";
import "./TaskForm.css";
import { TaskListContext } from "./TaskListContext";
//import "./components/";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem != null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div className="task__form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={title}
          className="task-input"
          placeholder="Add task..."
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? "Edit task" : "Add task"}
          </button>

          <button onClick={clearList} className="btn clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
