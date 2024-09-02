import React from "react";
import TodoItem from "../todo-item";
import "./todo-wrapper.css";

function TodoStatusWrapper({ title, todos }) {
  return (
    <div className="todo_wrapper">
      <h1 className="title">{title}</h1>
      <div className="todo_container">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoStatusWrapper;
