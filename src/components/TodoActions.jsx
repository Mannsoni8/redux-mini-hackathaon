import { useDispatch, useSelector } from "react-redux";
import {
  clearTodo,
  deleteTodo,
  removeToast,
} from "../redux/features/todoSlice";

const TodoActions = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const completed = todos.filter((todo) => todo.completed).length;

  const handleClear = () => {
    dispatch(clearTodo());
    dispatch(removeToast());
  };

  return (
    <div className="my-10 flex justify-between gap-4 rounded-xl bg-white p-5 shadow-md">
      <button
        onClick={handleClear}
        disabled={todos.length === 0}
        className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Clear All
      </button>

      <button
        onClick={() => dispatch(deleteTodo())}
        disabled={completed === 0}
        className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Delete Completed
      </button>
    </div>
  );
};

export default TodoActions;
