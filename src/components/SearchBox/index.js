import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="searchBox position-relative d-flex align-items-center">
    <FaSearch  className="mr-2"/>
      <input type="text" placeholder="Search here.." />
    </div>
  );
};

export default SearchBox;
