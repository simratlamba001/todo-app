import React from "react";
import { FaList } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";

const sortValues = [
  { value: "order-added", title: "Order added" },
  { value: "min-date", title: "Earlier first" },
  { value: "max-date", title: "Later first" },
  { value: "completed-first", title: "Completed first" },
  { value: "uncompleted-first", title: "Uncompleted first" },
];

const ButtonsSort = ({ listView, setlistView, sortedBy, setSortedBy }) => {
  return (
    <div className="flex children-styles">
      <button
        onClick={() => setlistView(true)}
        title="view in list"
        className="mr-3 text-xl"
      >
        <FaList className={listView ? "text-blue-600" : "text-gray-400"} />
      </button>
      <button
        onClick={() => setlistView(false)}
        title="view in grid"
        className="mr-3 text-xl"
      >
        <MdOutlineGridView
          className={!listView ? "text-blue-600" : "text-gray-400"}
        />
      </button>
      <select
        className="ml-auto bg-gray-200 p-3 rounded"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          Sort by
        </option>
        {sortValues.map((val) => (
          <option
            key={val.value}
            value={val.value}
            className="bg-slate-100 dark:bg-slate-800"
          >
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonsSort;
