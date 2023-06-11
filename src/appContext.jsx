import { useContext, useState, createContext } from "react";

const EditAppContext = createContext();

export const EditAppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
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
    <EditAppContext.Provider
      value={{
        editTodoById,
        createNewTodo,
        deleteTodoById,
      }}
    >
      {children}
    </EditAppContext.Provider>
  );
};

export default EditAppContext;
