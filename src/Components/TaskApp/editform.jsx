import React, { useState } from "react";

const EditForm = ({ onSubmit, item }) => {
  const [newTitle, setNewTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item.id, newTitle);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-3">
        <label className="text-lg text-gray-600 mb-4">
          Edit Title
          <input
            type="text"
            required=""
            value={newTitle}
            className="w-full p-3 border border-gray-300 rounded text-base text-gray-700 mt-3"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>

        <button type="submit" className="common-button mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
