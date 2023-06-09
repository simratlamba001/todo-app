import React, { useState } from "react";

const EditForm = ({ item, onSubmit }) => {
  const [title, setTitle] = useState(item.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item.id, title);
  };
  return (
    <div className="p-6 bg-white">
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border border-gray-300 w-full p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-400 text-white p-2 border border-blue-400 mt-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;
