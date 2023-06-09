import React, { useState } from "react";
import { FaRegStar, FaRegTrashAlt, FaEllipsisV } from "react-icons/fa";
import EditForm from "./editform";

const TaskCard = ({ todoItem, removeItem, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  return (
    <>
      <ul className="flex flex-wrap">
        {todoItem.map((item) => (
          <li className="w-1/4 p-3" key={item.id}>
            <div className="bg-gray-200 rounded">
              <div className="card-header">
                <img
                  src="https://picsum.photos/200"
                  alt="Book"
                  className="w-full"
                />
              </div>
              {!showEdit && (
                <>
                  <div className="flex flex-col p-4">
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-base text-gray-700 font-light mt-2 mb-0">
                      {item.description}
                    </p>
                    <p className="mt-auto text-sm font-light text-gray-700">
                      {item.date}
                    </p>
                  </div>
                  <div className="flex p-4 justify-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-blue-400 rounded px-3 py-2 text-lg text-white font-medium mr-3"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setShowEdit(!showEdit)}
                      className="bg-blue-400 rounded px-3 py-2 text-lg text-white font-medium"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
              {showEdit && (
                <EditForm item={item} onSubmit={handleSubmit}></EditForm>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskCard;
