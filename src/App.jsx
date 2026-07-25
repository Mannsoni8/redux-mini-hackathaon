import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import TaskStats from "./components/TaskStats";
import TodoActions from "./components/TodoActions";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-blue-950 px-2 py-4">
      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Todo App
      </h1>

      <div className="mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="h-[80vh] rounded-xl bg-white p-6 shadow-lg ">
          <TodoForm />
          <TodoActions />
        </div>

        <div className="h-[80vh] rounded-xl bg-white p-6 shadow-lg lg:col-span-2 overflow-auto">
          <TaskStats />

          <div className="my-6 flex flex-col gap-4 md:flex-row">
            <SearchBar />
            <Filter />
          </div>

          <div className="max-h-[350px] overflow-y-auto">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
