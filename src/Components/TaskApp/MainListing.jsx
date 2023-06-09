import React, { useState } from "react";
import { data } from "./data";

const MainListing = () => {
  const [todos, setTodos] = useState(data);
  const addNewTodos = (item) => {
    const newTodo = {
      id: uuidv4(),
      title: item,
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
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

  return (
    <div>
      <section>
        <div className="p-20">
          <TaskForm addNewTodo={addNewTodos}></TaskForm>
          <TaskCard
            todoItem={todos}
            removeItem={deleteTodoById}
            onEdit={editTodoById}
          ></TaskCard>
        </div>
      </section>
    </div>
  );
};

export default MainListing;
