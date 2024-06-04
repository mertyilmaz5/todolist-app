import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <Header remainingTasks={remainingTasks} />
      <TaskInput addTask={addTask} />
      <div>
        <button onClick={() => setFilter("all")}>Bütün taskları göster</button>
        <button onClick={() => setFilter("active")}>
          Aktif taskları göster
        </button>
        <button onClick={() => setFilter("completed")}>
          Tamamlanmış taskları göster
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
