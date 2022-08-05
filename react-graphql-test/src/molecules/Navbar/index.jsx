import React from "react";
import Input from "../../atoms/Input";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="Nav">
      <p className="italic font-bold text-[30px]">Animies</p> <Input />
    </div>
  );
};

export default NavBar;
