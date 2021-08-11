import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
function Header() {
  return (
    <header className="header">
      <MenuIcon style={{ marginLeft: "20px" }} />
      <p>Home</p>
    </header>
  );
}

export default Header;
