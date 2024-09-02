
import "./todo-item.css";
import { Icons } from "../icons";

function TodoItem({task}) {
  return (
    <div className="todo_item">
      <Icons.minus />
      <p>{task}</p>
      <Icons.plus />
    </div>
  );
}

export default TodoItem;
