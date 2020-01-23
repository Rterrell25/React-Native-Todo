import React, { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = description => {
    const newTask = {
      description,
      completed: false,
      id: String(Number(new Date()))
    };
    setTasks([newTask, ...tasks]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};
