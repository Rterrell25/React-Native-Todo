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

  const flipTask = taskId => {
    const index = tasks.findIndex(task => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, flipTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
