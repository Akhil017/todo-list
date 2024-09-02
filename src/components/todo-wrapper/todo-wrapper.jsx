import TodoItem from "../todo-item";
import "./todo-wrapper.css";

function TodoStatusWrapper({ title, todos }) {
  return (
    <div className="todo_wrapper">
      <h1 className="title">{title}</h1>
      <div className="todo_container">
        {todos.map(todo => <TodoItem key={todo.id} task={todo.task}/>)}
      </div>
    </div>
  );
}

export default TodoStatusWrapper;
