import React from "react";

const SearchBar = () => {
  return (
    <div className="uniSearchDiv">
      <div>
        <img src="/icons8-search.svg" alt="search-icon" />
        <input type="text" placeholder="Search for your university" />
      </div>
      <button id="searchBtn">Search</button>
    </div>
  );
};

export default SearchBar;
