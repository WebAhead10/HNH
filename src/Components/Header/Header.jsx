import React from "react";
import "./style.css";
import SideNavBar from "../SideNavBar/SideNavBar";
function Header(props) {
  return (
    <div>
      {<SideNavBar sideNavBarOpen={props.sideNavBarOpen} />}
    </div>
  );
}

export default Header;
