import React, { useState } from "react";

const TaskForm = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(title);
    setNewTodo("");
  };
  return (
    <div>
      <section className="relative bg-gray-100 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
        <h2 className="font-bold text-gray-700 my-5 text-center sm:text-left sm:my-8 md:text-2xl text-xl">
          Add a Book Title
        </h2>
        <form
          className="flex flex-col stylesInputsField"
          onSubmit={handleSubmit}
        >
          <label className="text-lg text-gray-600 mb-4">
            Title
            <input
              type="text"
              placeholder="e.g, study for the test"
              required=""
              value={title}
              className="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <button type="submit" className="common-button">
            Add a Book
          </button>
        </form>
      </section>
    </div>
  );
};

export default TaskForm;
