# 📝 Redux Todo App

A modern Todo application built with **React**, **Redux Toolkit**, and **Local Storage**. This project demonstrates complete CRUD operations, global state management, search, filtering, task statistics, priority management, and persistent data storage.

---

Live link - https://redux-mini-hackathaon.vercel.app/

## 🚀 Features

- ✅ Add Todo
- ✏️ Edit Todo
- ❌ Delete Todo
- ✔️ Mark Todo as Complete/Incomplete
- 🔍 Search Todos
- 🎯 Filter Todos (All / Completed / Pending)
- 📊 Task Statistics
- 🗑️ Clear All Todos
- 🧹 Delete Completed Todos
- 💾 Local Storage Persistence
- ⚡ Global State Management using Redux Toolkit

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- Vite
- CSS

---

## 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Filter.jsx
│   ├── SearchBar.jsx
│   ├── TaskStats.jsx
│   ├── TodoActions.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       └── todoSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd <project-folder>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📸 Features Overview

### Add Todo

- Add a new task
- Select task priority
- Automatically generates a unique ID

### Edit Todo

- Update task text
- Save changes instantly

### Delete Todo

- Remove any task from the list

### Toggle Completion

- Mark tasks as completed or pending

### Search

- Search tasks instantly using keywords

### Filter

- View:
  - All Tasks
  - Completed Tasks
  - Pending Tasks

---

## 📊 Task Statistics

Displays:

- Total Tasks
- Completed Tasks
- Pending Tasks
- Completion Percentage

---

## 💾 Local Storage

Todos are automatically saved in Local Storage.

Refreshing the page does **not** remove your tasks.

---

## 🏗️ Redux Architecture

```text
User Action
      │
      ▼
dispatch(Action)
      │
      ▼
Reducer (todoSlice)
      │
      ▼
Redux Store
      │
      ▼
useSelector()
      │
      ▼
Updated UI
```

---

## 📚 Redux Concepts Used

- configureStore()
- createSlice()
- useDispatch()
- useSelector()
- Reducers
- Actions
- Payload
- Immer
- Global State Management

---

## 🎯 Learning Outcomes

This project helped me understand:

- React Component Structure
- Redux Toolkit
- Global State Management
- CRUD Operations
- Array Manipulation
- Local Storage
- Search Functionality
- Filtering
- Sorting
- Derived State
- Redux Data Flow

---

## 👨‍💻 Author

**Mann Soni**

- GitHub: https://github.com/Mannsoni8
- LinkedIn:https://www.linkedin.com/in/mann-soni-6a5182268/

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub and feel free to contribute or suggest improvements.
