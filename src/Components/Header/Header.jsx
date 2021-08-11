import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import SideNavBar from "../SideNavBar/SideNavBar";
function Header(props) {
  return (
  <div>
    {props.sideNavBarOpen && <SideNavBar />}
    <header className="header">
      <button className="menuBtn" onClick={() => props.setSideNavBarOpen(!props.sideNavBarOpen)}> <MenuIcon style={{ marginLeft: "20px" }} /></button>
      <p>Home</p>
    </header>
  </div>
  );
}

export default Header;
