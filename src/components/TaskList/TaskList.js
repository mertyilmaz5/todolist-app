import React from "react";
import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, toggleTask, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
