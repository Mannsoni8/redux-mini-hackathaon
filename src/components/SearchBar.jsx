import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/features/todoSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.todo.search);

  return (
    <input
      className="mb-5 w-full rounded-lg border px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      type="text"
      placeholder="🔍 Search Todo..."
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
};

export default SearchBar;
