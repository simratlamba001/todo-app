const Search = () => {
  return (
    <>
      <form>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter to Search"
            className="p-3 border border-gray-300 rounded text-base"
          />
          <input
            type="submit"
            className="rounded px-3 py-2 font-bold text-lg bg-blue-500 text-white ml-4 cursor-pointer"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
