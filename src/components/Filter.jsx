import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/features/todoSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  return (
    <div className="flex gap-2 rounded-lg bg-gray-100 p-1">
      <button
        onClick={() => dispatch(setFilter("all"))}
        disabled={filter === "all"}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          filter === "all"
            ? "bg-indigo-600 text-white shadow"
            : "text-gray-700 hover:bg-white"
        } disabled:cursor-not-allowed`}
      >
        All
      </button>

      <button
        onClick={() => dispatch(setFilter("completed"))}
        disabled={filter === "completed"}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          filter === "completed"
            ? "bg-green-600 text-white shadow"
            : "text-gray-700 hover:bg-white"
        } disabled:cursor-not-allowed`}
      >
        Completed
      </button>

      <button
        onClick={() => dispatch(setFilter("pending"))}
        disabled={filter === "pending"}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          filter === "pending"
            ? "bg-yellow-500 text-white shadow"
            : "text-gray-700 hover:bg-white"
        } disabled:cursor-not-allowed`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
