import { STATUS } from "../constants";
import { Icons } from "../icons";
import TodoItem from "../todo-item";
import "./todo-wrapper.css";

function TodoStatusWrapper({ title, statusType, todos, handleChangeStatus, handleChangePriority }) {
  const showLeftArrow =
    (statusType === STATUS.IN_PROGRESS || statusType === STATUS.DONE) &&
    todos.length > 0;
  const showRightArrow =
    (statusType === STATUS.TODO || statusType === STATUS.IN_PROGRESS) &&
    todos.length > 0;

  return (
    <div className="todo_wrapper">
      <h1 className="title">{title}</h1>
      <div className="todo_container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo_item_wrapper">
            {showLeftArrow && <Icons.left onClick={() => handleChangeStatus(todo.id, todo.status - 1)}/>}
            <TodoItem todo={todo} handleChangePriority={handleChangePriority}/>
            {showRightArrow &&<Icons.right onClick={() =>  handleChangeStatus(todo.id, todo.status + 1)}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoStatusWrapper;
