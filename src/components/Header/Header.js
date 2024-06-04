import React from "react";
import "./Header.css";

const Header = ({ remainingTasks }) => {
  return (
    <header>
      <h1>ToDo List</h1>
      <p>Kalan task: {remainingTasks}</p>
    </header>
  );
};

export default Header;
