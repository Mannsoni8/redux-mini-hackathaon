import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  removeToast,
  toggleTodo,
} from "../redux/features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleClear = () => {
    dispatch(deleteTodo(todo.id));
    dispatch(removeToast());
  };

  return (
    <div className="rounded-xl border bg-slate-50 p-4 shadow-sm">
      {editing ? (
        <>
          <input
            className="mb-3 w-full rounded-lg border px-3 py-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="rounded bg-green-600 px-4 py-2 text-white"
            onClick={() => {
              dispatch(editTodo({ id: todo.id, text }));
              setEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3
            className={`text-lg font-medium ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </h3>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => setEditing(true)}
              className="rounded bg-yellow-500 px-3 py-2 text-white hover:bg-yellow-600"
            >
              Edit
            </button>

            <button
              onClick={handleClear}
              className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
