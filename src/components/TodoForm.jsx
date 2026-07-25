import { useState } from "react";
import { useDispatch } from "react-redux";
import { addedToast, addTodo } from "../redux/features/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      }),
    );
    dispatch(addedToast());
    setText("");
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-semibold">Add Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Todo..."
          className="w-full rounded-lg border px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <button className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
