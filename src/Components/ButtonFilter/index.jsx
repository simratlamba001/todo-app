import React from "react";

const CategoryButtons = ({ bookCategory, filterItems }) => {
  const renderCate = bookCategory.map((item) => (
    <div className="filterListing-btn border-b-2 border-dashed border-gray-500">
      <button
        onClick={() => filterItems(item)}
        key={item}
        className="px-3 py-4 w-full text-left capitalize block hover:bg-gray-300 border-r-4 border-transparent hover:border-blue-500"
      >
        {item}
      </button>
    </div>
  ));
  return <>{renderCate}</>;
};

export default CategoryButtons;
