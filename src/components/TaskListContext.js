import React, { createContext, useState } from "react";
import uuid from "uuid";
import "./TaskListContext.css";

//import "./components/";
export const TaskListContext = createContext();
const TaskListContextProvider = (props) => {
  const [tasks, taskSetter] = useState([
    { title: "Read a book", id: 1 },
    { title: "Read a tutorial", id: 2 },
    { title: "Read a journal", id: 3 }
  ]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    taskSetter([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    taskSetter.filter((task) => task.id !== id);
  };

  const clearList = () => {
    taskSetter([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title } : task
    );
    taskSetter(newTasks);
    setEditItem(null);
  };

  return (
    <div className="task__list">
      <TaskListContextProvider
        value={{
          tasks,
          addTask,
          removeTask,
          clearList,
          findItem,
          editTask,
          editItem
        }}
      >
        {props.children}
      </TaskListContextProvider>
    </div>
  );
};

export default TaskListContextProvider;
