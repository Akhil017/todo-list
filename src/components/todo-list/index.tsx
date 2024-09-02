import React from "react";
import TodoStatusWrapper from "../todo-wrapper/todo-wrapper";
import "./todo-list.css";

function TodoList() {
  return (
    <div className="todo_list">
      <TodoStatusWrapper title="Todo" todos={[]} />
      <TodoStatusWrapper title="Inprogress" todos={[]} />
      <TodoStatusWrapper title="Done" todos={[]} />
    </div>
  );
}

export default TodoList;
