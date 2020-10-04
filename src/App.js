import React from "react";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./components/TaskListContext";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import "./styles.css";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="todo__app">
        <div className="todo_wrapper">
          <Header />
          <div className="container">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
