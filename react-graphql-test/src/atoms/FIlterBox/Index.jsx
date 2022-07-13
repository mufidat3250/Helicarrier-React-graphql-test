import React from "react";

const FilterBox = ({ title, handleClick }) => {
  return (
    <button
      className="text-[16px] text-center font-[400] p-4  rounded-sm bg-slate-200"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default FilterBox;
