import React from "react";
import "./todo-item.css";
import { Icons } from "../icons";

function TodoItem() {
  return (
    <div className="todo_item">
      <Icons.minus />
      <p>{"TodoItem"}</p>
      <Icons.plus />
    </div>
  );
}

export default TodoItem;
