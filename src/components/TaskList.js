import React, { useContext } from "react";
import "./TaskList.css";
import { TaskListContext } from "./TaskListContext";
import { Task } from "./Task";

//import "./components/";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="task__list">
      {tasks.length ? (
        <ul className="list">
          <li>
            {tasks.map((task) => {
              return <Task task={task} key={task.id} />;
            })}
          </li>
        </ul>
      ) : (
        <div className="no-tasks">No tasks</div>
      )}
    </div>
  );
};

export default TaskList;
