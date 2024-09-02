import { useState } from "react";
import TodoStatusWrapper from "../todo-wrapper/todo-wrapper";
import "./todo-list.css";
import { STATUS } from "../constants";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      task: value,
      status: STATUS.TODO,
    };
    setTodoList((prev) => [...prev, todo]);
    setValue("");
  };

  const handleIncreasePriority = () => {};
  const handleDecreasePriority = () => {};

  const handleChangeStatus = (id, status) => {
    console.log({id, status})
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodoList(updatedList);
  };

  const statusTodo = todoList.filter((todo) => todo.status === 0);
  const statusInprogress = todoList.filter((todo) => todo.status === 1);
  const statusDone = todoList.filter((todo) => todo.status === 2);

  return (
    <div className="todo_list">
      <TodoStatusWrapper
        title="Todo"
        todos={statusTodo}
        statusType={STATUS.TODO}
        handleChangeStatus={handleChangeStatus}
      />
      <TodoStatusWrapper
        title="Inprogress"
        todos={statusInprogress}
        statusType={STATUS.IN_PROGRESS}
        handleChangeStatus={handleChangeStatus}
      />
      <TodoStatusWrapper
        title="Done"
        todos={statusDone}
        statusType={STATUS.DONE}
        handleChangeStatus={handleChangeStatus}
      />

      <div className="todo_input_wrapper">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
