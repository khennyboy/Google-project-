import React from 'react';
import useSearch from '../contexts/CustomHook';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const Navigate = useNavigate()
  const {
    text,
    handleInputChange,
    clearSearch, 
    handleSearch
  } = useSearch();

  const handleKeyDown = (e) => {
    e.preventDefault(); // Prevent default form submission
      handleSearch()
  };

  return (
    <div className="relative">
      <form id="searchForm" onSubmit={handleKeyDown}>
        <input
          id="searchBtn"
          value={text}
          type="text"
          className="bg-gray-200 w-[30vw] block border rounded-full shadow-sm outline-none text-[1.2rem] p-4 text-black hover:shadow-lg transition-all duration-[0.3s] ease-linear"
          placeholder="🔎 Search here"
          onChange={handleInputChange}
        />
        {text !== '' && (
          <button
            type="button"
            className="absolute top-0 bottom-0 my-[auto] font-bold  right-5 text-2xl text-gray-500 "
            onClick={clearSearch}
          >
            x
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchComponent;
