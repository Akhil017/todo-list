import  { useState } from "react";
import TodoStatusWrapper from "../todo-wrapper/todo-wrapper";
import "./todo-list.css";

const STATUS = {
  "TODO":0,
   "IN_PROGRESS":1,
   "DONE":2,
};

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("")

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      task: value,
      status: STATUS.TODO
    };
    setTodoList((prev) => [...prev, todo]);
    setValue("")
  };

  const handleIncreasePriority = () => {};
  const handleDecreasePriority = () => {};

  const handleMoveTodoToRight = () => {};
  const handleMoveRodoToLefr = () => {};

  const statusTodo = todoList.filter((todo) => todo.status === 0);
  const statusInprogress = todoList.filter((todo) => todo.status === 1);
  const statusDone = todoList.filter((todo) => todo.status === 2);

  return (
    <div className="todo_list">
      <TodoStatusWrapper title="Todo" todos={statusTodo} />
      <TodoStatusWrapper title="Inprogress" todos={statusInprogress} />
      <TodoStatusWrapper title="Done" todos={statusDone} />

      <div className="todo_input_wrapper">
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
