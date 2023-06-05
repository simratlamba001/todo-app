import { useState } from "react";
const AddForm = () => {
  const [title, setTitle] = useState(""); // useState to store First Name
  const [description, setDescription] = useState(""); // useState to store Last Name

  function validateForm() {
    if (title.length == 0) {
      alert("Please enter task name!");
      return;
    }

    if (description.length == 0) {
      alert("Enter some description");
      return;
    }
  }
  return (
    <>
      <section class="relative bg-gray-100 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
        <h2 class="font-bold text-gray-700 my-5 text-center sm:text-left sm:my-8 md:text-2xl text-xl">
          Add a task
        </h2>
        <form class="flex flex-col stylesInputsField">
          <label className="text-lg text-gray-600 mb-4">
            Title
            <input
              type="text"
              placeholder="e.g, study for the test"
              required=""
              class="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
              value=""
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="text-lg text-gray-600 mb-4">
            Date
            <input
              type="date"
              class="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
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
              class="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <button
            type="submit"
            class="common-button"
            onClick={() => {
              validateForm();
            }}
          >
            Add a task
          </button>
        </form>
      </section>
    </>
  );
};
export default AddForm;
