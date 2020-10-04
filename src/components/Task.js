import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";
import "./TaskList.css";

//import "./components/";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <div className="task__list">
      <span> {task.title}</span>
      <li>
        <div className="">
          <button
            onClick={() => removeTask(task.id)}
            className="btn-delete btn-task"
          >
            <i className="fas fa-trash-alt"></i>
          </button>

          <button
            onClick={() => findItem(task.id)}
            className="btn-edit btn-task"
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
      {}
    </div>
  );
};

export default Task;
