import React from "react";

const SearchBox = ({ query, setQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;


