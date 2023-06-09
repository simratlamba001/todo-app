import React, { useState } from "react";
import data from "./data";
import TodoList from "./TodoList";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from "uuid";
import CategoryButtons from "./CategoryButtons";

const allCate = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCate);
const EditApp = () => {
  const [bookCategory, setbookCategory] = useState(allCate);
  const [todos, setTodos] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setTodos(data);
      return;
    }
    const newbookCategory = data.filter((item) => item.category === category);
    setTodos(newbookCategory);
  };
  const editTodoById = (id, newTitle) => {
    const updatedTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setTodos(updatedTodo);
    console.log(updatedTodo);
  };

  const deleteTodoById = (id) => {
    const newItems = todos.filter((item) => item.id !== id);
    setTodos(newItems);
  };

  const createNewTodo = (item) => {
    const newTodo = {
      id: uuidv4(),
      title: item,
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
  };

  return (
    <>
      <header className="bg-blue-400 py-2 m-0">
        <h1 className="font-bold text-gray-700 my-5 block text-center sm:my-8 md:text-2xl text-xl px-3 text-white">
          Your Favourite Books Corner
        </h1>
      </header>
      <section className="bg-gray-100 flex flex-wrap">
        <div className="basis-3/12 shrink-0 grow-0 bg-gray-600">
          <h2 className="font-bold text-gray-700 my-5 block text-center sm:my-8 md:text-2xl text-xl px-3 text-white">
            Filters
          </h2>

          <CategoryButtons
            bookCategory={bookCategory}
            filterItems={filterItems}
          />
        </div>
        <div className="shrink-0 grow-0 basis-9/12">
          <div className="px-8 pt-8">
            <AddForm onCreateNewTodo={createNewTodo} />
            {todos.length === 0 ? (
              <div className="bg-white text-blue-500 font-bold text-center text-2xl p-3 rounded mt-4">
                Todo List not found
              </div>
            ) : (
              <TodoList
                onDelete={deleteTodoById}
                onEdit={editTodoById}
                todos={todos}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default EditApp;
