import { useState } from "react";
const AddForm = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(title);
    setTitle("");
  };
  return (
    <>
      <section className="relative bg-gray-100 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
        <h2 className="font-bold text-gray-700 my-5 text-center sm:text-left sm:my-8 md:text-2xl text-xl">
          Add a task
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
          <label className="text-lg text-gray-600 mb-4">
            Date
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
              required=""
              min="2023-6-5"
              max="2024-6-5"
              value="2023-6-5"
            />
          </label>
          <label className="text-lg text-gray-600 mb-4">
            Description (optional)
            <textarea
              placeholder="e.g, study for the test"
              className="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
            ></textarea>
          </label>

          <button type="submit" className="common-button">
            Add a task
          </button>
        </form>
      </section>
    </>
  );
};
export default AddForm;
