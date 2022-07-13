import React from "react";
import SearchIcon from "../Vectors/SearchIcon";
import "./InputStyle.scss";
import { filterBySearch } from "../../Store/filterReducer";
import { useDispatch } from "react-redux";
const Input = () => {
  const dispatch = useDispatch();

  return (
    <div className="InputWrapper">
      <div className="input-container">
        <input
          type="text"
          className="input"
          onChange={(e) => dispatch(filterBySearch(e.currentTarget.value))}
        />
      </div>
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Input;
