
import "./todo-item.css";
import { Icons } from "../icons";

function TodoItem({todo, handleChangePriority}) {
  return (
    <div className="todo_item">
      <Icons.minus onClick={() => handleChangePriority(todo.id, todo.priority - 1)}/>
      <p>{todo.task}</p>
      <Icons.plus onClick={() => handleChangePriority(todo.id, todo.priority + 1)}/>
    </div>
  );
}

export default TodoItem;
