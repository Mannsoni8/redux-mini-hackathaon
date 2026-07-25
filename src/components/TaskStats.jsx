import { useSelector } from "react-redux";

const TaskStats = () => {
  const todos = useSelector((state) => state.todo.todos);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="rounded-xl bg-white p-2 shadow-lg">
      <h3 className="mb-3 text-lg font-bold text-gray-800">Task Statistics</h3>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-blue-100 p-3">
          <p className="text-xs text-gray-600">Total Tasks</p>
          <h2 className="text-2xl font-bold text-blue-700">{total}</h2>
        </div>

        <div className="rounded-lg bg-green-100 p-3">
          <p className="text-xs text-gray-600">Completed</p>
          <h2 className="text-2xl font-bold text-green-700">{completed}</h2>
        </div>

        <div className="rounded-lg bg-yellow-100 p-3">
          <p className="text-xs text-gray-600">Pending</p>
          <h2 className="text-2xl font-bold text-yellow-700">{pending}</h2>
        </div>

        <div className="rounded-lg bg-purple-100 p-3">
          <p className="text-xs text-gray-600">Progress</p>
          <h2 className="text-2xl font-bold text-purple-700">{percentage}%</h2>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-gray-600">
          <span>Completion</span>
          <span>{percentage}%</span>
        </div>

        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
