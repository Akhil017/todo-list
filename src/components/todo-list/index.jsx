import { useState } from "react";
import TodoStatusWrapper from "../todo-wrapper/todo-wrapper";
import "./todo-list.css";
import { PRIORITY, STATUS } from "../constants";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      task: value,
      status: STATUS.TODO,
      priority: PRIORITY.LOW,
    };
    setTodoList((prev) => [...prev, todo]);
    setValue("");
  };

  const handleChangePriority = (id, priority) => {
    console.log({ id, priority });
    if (priority > 2 || priority < 0) return;
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, priority } : todo
    );
    setTodoList(updatedList);
  };

  const handleChangeStatus = (id, status) => {
    console.log({ id, status });
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodoList(updatedList);
  };

  const statusTodo = todoList
    .filter((todo) => todo.status === 0)
    .sort(function (a, b) {
      return b.priority - a.priority;
    });

  const statusInprogress = todoList
    .filter((todo) => todo.status === 1)
    .sort(function (a, b) {
      return b.priority - a.priority;
    });
  const statusDone = todoList
    .filter((todo) => todo.status === 2)
    .sort(function (a, b) {
      return b.priority - a.priority;
    });

  return (
    <div className="todo_list">
      <TodoStatusWrapper
        title="Todo"
        todos={statusTodo}
        statusType={STATUS.TODO}
        handleChangeStatus={handleChangeStatus}
        handleChangePriority={handleChangePriority}
      />
      <TodoStatusWrapper
        title="Inprogress"
        todos={statusInprogress}
        statusType={STATUS.IN_PROGRESS}
        handleChangeStatus={handleChangeStatus}
        handleChangePriority={handleChangePriority}
      />
      <TodoStatusWrapper
        title="Done"
        todos={statusDone}
        statusType={STATUS.DONE}
        handleChangeStatus={handleChangeStatus}
        handleChangePriority={handleChangePriority}
      />

      <div className="todo_input_wrapper">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
