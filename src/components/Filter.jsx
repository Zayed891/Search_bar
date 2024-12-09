import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
  );
};

export default Filter;


