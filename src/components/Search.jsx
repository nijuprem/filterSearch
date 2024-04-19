import React, { useState } from "react";
import "../assets/css/Search.css";
import { useDispatch } from "react-redux";
import { searchForm } from "../redux/searchSlice";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchData(e.target.value);
  };

  const onSubmitHandler = () => {
    // console.log(searchData);
    dispatch(searchForm(searchData));
  };

  return (
    <div className="search_container">
      <input
        type="text"
        name="search"
        value={searchData}
        placeholder="Search here..."
        onChange={handleChange}
      />
      <button onClick={onSubmitHandler}>🔍</button>
    </div>
  );
};

export default Search;
