import { useState } from "react";
import { FaRegStar, FaRegTrashAlt, FaEllipsisV } from "react-icons/fa";
const TaskCard = ({ taskItems }) => {
  const { title, description, completed, date } = taskItems;
  return (
    <>
      <li className="">
        <div className="bg-gray-200 rounded p-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-800">{title}</h2>
            <p className="text-base text-gray-700 font-light mt-2 mb-0">
              {description}
            </p>
            <p className="mt-auto text-sm font-light text-gray-700">{date}</p>
          </div>
          <div className="flex">
            <button className="bg-emerald-200 text-emerald-800  mr-4 rounded-full font-medium">
              {completed}
            </button>
            <button>
              <FaRegStar></FaRegStar>
            </button>
            <button>
              <FaRegTrashAlt></FaRegTrashAlt>
            </button>
            <button>
              <FaEllipsisV></FaEllipsisV>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TaskCard;
