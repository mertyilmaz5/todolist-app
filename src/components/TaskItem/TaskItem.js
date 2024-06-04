import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleTask, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleUpdate = () => {
    updateTask(task.id, newName);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <span>{task.name}</span>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>Kaydet</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Düzenle</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Sil</button>
    </li>
  );
};

export default TaskItem;
