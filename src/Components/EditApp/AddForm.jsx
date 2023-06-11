import React, { useContext, useState } from "react";
import EditAppContext from "../../appContext";

const AddForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { createNewTodo } = useContext(EditAppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTodo(newTodo);
    setNewTodo("");
  };
  return (
    <section className="relative bg-white max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
      <h2 className="font-bold text-gray-700 my-4 text-center sm:text-left md:text-2xl text-xl">
        Add a Book Title
      </h2>
      <form className="flex flex-col stylesInputsField" onSubmit={handleSubmit}>
        <label className="text-lg text-gray-600 mb-4">
          Title
          <input
            type="text"
            placeholder="e.g, study for the test"
            required=""
            value={newTodo}
            className="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>

        <button type="submit" className="common-button">
          Add a Book
        </button>
      </form>
    </section>
  );
};

export default AddForm;
