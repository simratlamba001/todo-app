import React from "react";

const CategoryButtons = ({ bookCategory, filterItems }) => {
  const renderCate = bookCategory.map((item) => (
    <div className="buttonListing">
      <button
        onClick={() => filterItems(item)}
        key={item}
        className="bg-buttonbg px-3 py-2 capitalize hover:bg-gray-200 border-r-4 border-solid border-transparent hover:border-blue-500 block w-full text-left font-bold text-lg text-white hover:text-blue-500"
      >
        {item}
      </button>
    </div>
  ));
  return <>{renderCate}</>;
};

export default CategoryButtons;
