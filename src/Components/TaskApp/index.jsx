import React, { useState } from "react";
import TaskForm from "./form";
import TaskCard from "./taskcard";
import data from "./data";
import { v4 as uuidv4 } from "uuid";

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const setLocalStorage = (todos) => {
  localStorage.setItem("list", JSON.stringify(todos));
};

const TaskShowListing = () => {
  const [todos, setTodos] = useState(defaultList);
  const addNewTodoEvent = (item) => {
    const newTodo = {
      id: uuidv4(),
      title: item,
    };
    const newItems = [...todos, newTodo];
    setTodos(newItems);
  };
  const removeTodoEvent = (id) => {
    const newItems = todos.filter((item) => item.id !== id);
    setTodos(newItems);
  };
  return (
    <div>
      <section>
        <div className="p-20">
          <TaskForm addNewTodo={addNewTodoEvent}></TaskForm>
          <TaskCard todoItem={todos} removeItem={removeTodoEvent}></TaskCard>
        </div>
      </section>
    </div>
  );
};

export default TaskShowListing;
