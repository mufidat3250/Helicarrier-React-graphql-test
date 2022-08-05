import React from "react";

const Select = ({ title, options, handleClick }) => {
  return (
    <select
      name=""
      id=""
      className="p-2 rounded-sm  outline-none bg-slate-200 cursor-pointer"
      onChange={(e) => {
        e.preventDefault();
        handleClick(e.currentTarget.value);
      }}
    >
      <option selected>{title}</option>
      {options.map((value, index) => {
        return (
          <option key={index} className="">
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
