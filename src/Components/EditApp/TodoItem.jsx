import React, { useContext, useState } from "react";
import EditForm from "./EditForm";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import EditAppContext from "../../appContext";

const TodoItem = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [readMore, setReadMore] = useState(true);
  const { editTodoById, deleteTodoById } = useContext(EditAppContext);

  const handleSubmit = (id, newTitle) => {
    setIsEdit(false);
    editTodoById(id, newTitle);
  };

  return (
    <li className="w-1/3 p-3" key={item.id}>
      <div className="bg-gray-200 rounded">
        <div className="card-header relative">
          <p className="bg-blue-500 opacity-70 text-white font-bold text-lg absolute top-0 right-0 p-2 capitalize">
            {item.category}
          </p>
          <img
            src={`https://picsum.photos/seed/${item.id}/200`}
            alt="Book"
            className="w-full"
          />
        </div>
        {/* Todo Display*/}
        {!isEdit && (
          <section className="bg-white rounded overflow-hidden">
            <div className="flex flex-col p-4">
              <h2 className="text-xl font-medium text-gray-800">
                {item.title.substring(0, 30)}
              </h2>
              <p className="text-base text-gray-700 font-light mt-2 mb-0">
                {readMore
                  ? `${item.description.substring(0, 150)}`
                  : item.description}
                ...
              </p>
              <button
                className="text-blue-400 font-medium text-left text-md"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read More" : "Read Less"}
              </button>
              <p className="mt-auto text-sm font-light text-gray-700">
                {item.date}
              </p>
            </div>
            <div className="flex p-4 justify-center">
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-blue-400 rounded px-3 py-2 text-lg text-white font-medium mr-3"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => deleteTodoById(item.id)}
                className="bg-blue-400 rounded px-3 py-2 text-lg text-white font-medium mr-3"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </section>
        )}

        {/* Todo Edit Form*/}
        {isEdit && <EditForm item={item} onSubmit={handleSubmit} />}
      </div>
    </li>
  );
};

export default TodoItem;
