import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, search, filter } = useSelector((state) => state.todo);

  const filteredTodos = todos
    .filter((todo) =>
      (todo.text ?? "").toLowerCase().includes(search.toLowerCase()),
    )
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });

  return (
    <ul className="flex flex-col gap-5">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
