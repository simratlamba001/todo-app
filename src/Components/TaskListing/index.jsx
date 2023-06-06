import taskItems from "../../../Data/task";
import ButtonsSort from "../ButtonSort";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  FaRegStar,
  FaRegTrashAlt,
  FaEllipsisV,
  FaCalendarAlt,
} from "react-icons/fa";
import Search from "../Search";
import CategoryButtons from "../ButtonFilter";
import CommonButton from "../Button";
import AddForm from "../AddForm";

const allCate = ["all", ...new Set(taskItems.map((items) => items.category))];
console.log(allCate);
const TaskListing = () => {
  const [bookCategory, setbookCategory] = useState(allCate);
  const [listView, setlistView] = useState(false);
  const [title, setTitle] = useState([taskItems.category]);
  const [isShown, setIsShown] = useState(false);
  const [taskitems, settaskitems] = useState([
    {
      title: "Task 1",
      important: false,
      description: "This is the description for this task",
      date: "2023-04-12",
      dir: "Main",
      completed: true,
      id: "1",
      category: "Completed",
    },
    {
      title: "Task 2",
      important: true,
      description: "This is the description for this task",
      date: "2023-05-15",
      dir: "Main",
      completed: true,
      id: "2",
      category: "Uncomplete",
    },
    {
      title: "Task 3",
      important: false,
      description: "This is the description for this task",
      date: "2023-08-21",
      dir: "Main",
      completed: false,
      id: "3",
      category: "Uncompleted",
    },
  ]);
  const [isActive, setActive] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const importantClick = () => {
    setActive(!isActive);
  };
  const filterItems = (category) => {
    if (category === "all") {
      settaskitems(taskItems);
      return;
    }
    const newbookCategory = taskItems.filter(
      (items) => items.category === category
    );
    settaskitems(newbookCategory);
  };
  const deleteById = (id) => {
    settaskitems((oldValues) => {
      return oldValues.filter((items) => items.id !== id);
    });
  };
  const addNewTodoEvent = (item) => {
    const newTodo = {
      id: uuidv4(),
      title: item,
    };
    console.log(newTodo);
    const newItems = [...taskitems, newTodo];
    settaskitems(newItems);
  };
  const renderItems = taskitems.map((items) => (
    <li className="">
      <a className="ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition block hover:bg-rose-300">
        {items.dir}
      </a>
      <div
        className={`bg-gray-200 rounded p-4 hover:shadow-lg group hover:bg-blue-400  ${
          listView
            ? "flex justify-between items-center h-20 sm:h-32"
            : "h-52 sm:h-64 block"
        }`}
      >
        <div className="flex flex-col h-24">
          <h2 className="text-xl font-medium text-gray-800 group-hover:text-white">
            {items.title}
          </h2>
          <p className="text-base text-gray-700 font-light mt-2 mb-0 group-hover:text-white">
            {items.description}
          </p>
          <p className="mt-auto text-sm font-light text-gray-700 group-hover:text-white flex items-center">
            <FaCalendarAlt className="mr-2" /> {items.date}
          </p>
        </div>
        <div
          className={`flex ${
            listView
              ? "mt-0"
              : "mt-16 border-t-2 border-dashed border-gray-400 pt-6 justify-between group-hover:border-white"
          }`}
        >
          <button
            onClick={() => setTitle("New title")}
            className="bg-emerald-200 text-emerald-800  mr-4 rounded-full font-medium px-3 py-2 group-hover:text-white"
          >
            {items.category}
          </button>
          <div className="action-button">
            <button
              className={
                isActive
                  ? "active text-gray-500 hover:text-blue-400 ml-3 group-hover:text-white"
                  : "text-gray-500 hover:text-blue-400 ml-3 group-hover:text-white"
              }
              onClick={() => importantClick()}
            >
              <FaRegStar></FaRegStar>
            </button>
            <button
              onClick={() => deleteById(items.id)}
              className="text-gray-500 hover:text-blue-400 ml-3 group-hover:text-white"
            >
              <FaRegTrashAlt></FaRegTrashAlt>
            </button>
            <button className="text-gray-500 hover:text-blue-400 ml-3 group-hover:text-white">
              <FaEllipsisV></FaEllipsisV>
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      <section className="bg-gray-100 flex flex-wrap">
        <div className="basis-3/12 shrink-0 grow-0">
          <h2 className="font-bold text-gray-700 my-5 text-center sm:text-left sm:my-8 md:text-2xl text-xl px-3">
            To Do App
          </h2>
          <CategoryButtons
            bookCategory={bookCategory}
            filterItems={filterItems}
          />
        </div>
        <div className="basis-9/12 shrink-0 grow-0 ">
          <div className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 m-auto min-h-screen">
            <div className="flex flex-wrap items-center justify-between">
              <Search></Search>
              <CommonButton children="Add New Task"></CommonButton>
            </div>

            {isShown && <AddForm addNewTodo={addNewTodoEvent}></AddForm>}

            <h1 className="font-bold text-gray-700 my-5 text-center sm:text-left sm:my-8 md:text-2xl text-xl">
              My Tasks
              {taskItems.length}
            </h1>
            <ButtonsSort listView={listView} setlistView={setlistView} />
            <ul
              className={`taskListing mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
                listView
                  ? "grid-cols-1"
                  : "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
              }`}
            >
              {renderItems}
              <li>
                <button
                  className={`border-2 border-gray-300
             text-gray-400 w-full rounded-lg text-xl
              border-dashed transition hover:bg-gray-300
               hover:text-gray-500 ${
                 listView ? "h-20 sm:h-32" : "h-52 sm:h-64"
               }`}
                  onClick={handleClick}
                >
                  Add new task
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskListing;
