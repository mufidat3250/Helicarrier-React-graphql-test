import React from "react";
import Input from "../../atoms/Input";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="Nav">
      <h1 className="text-[24px] font-[600] italic">Animies</h1> <Input />
    </div>
  );
};

export default NavBar;
