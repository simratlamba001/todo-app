// import React, { useState } from "react";
// import { data } from "./data";
// import TodoList from "./TodoList";
// import AddForm from "./AddForm";
// import { v4 as uuidv4 } from "uuid";

// const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

// const setLocalStorage = (todos) => {
//   localStorage.setItem("list", JSON.stringify(todos));
// };

// const LocalTodo = () => {
//   const [todos, setTodos] = useState(defaultList);

//   const addNewTodoEvent = (item) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: item,
//     };
//     console.log(newTodo);
//     const newItems = [...todos, newTodo];
//     setTodos(newItems);
//     setLocalStorage(newItems);
//   };
//   const removeTodoEvent = (id) => {
//     const newItems = todos.filter((item) => item.id !== id);
//     setTodos(newItems);
//     setLocalStorage(newItems);
//   };
//   console.log();

//   return (
//     <div className="p-20">
//       <AddForm addNewTodo={addNewTodoEvent} />
//       {todos.length === 0 ? (
//         <div>Todo List not found</div>
//       ) : (
//         <TodoList removeItem={removeTodoEvent} todos={todos} />
//       )}
//     </div>
//   );
// };

// export default LocalTodo;
