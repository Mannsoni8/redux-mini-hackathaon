import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  search: "",
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo(state, action) {
      const alreadyExist = state.todos.find(
        (todos) => todos.id === action.payload.id,
      );
      if (!alreadyExist) {
        state.todos.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    editTodo(state, action) {
      const { id, text } = action.payload;

      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },

    clearTodo(state) {
      state.todos = [];
      localStorage.removeItem("todos");
    },

    addedToast: () => {
      toast.success("Todo created", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },

    removeToast: () => {
      toast.success("Deleted", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  addedToast,
  removeToast,
  clearTodo,
  setSearch,
  setFilter,
  toggleTodo,
  deleteCompleted,
} = todoSlice.actions;
export default todoSlice.reducer;
