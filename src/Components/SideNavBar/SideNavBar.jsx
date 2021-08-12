import React from "react";
import "./style.css";
import UserInfo from "../UserInfo/UserInfo";
const SideNavBar = ({ sideNavBarOpen }) => {
  return (
    <div className="left" style={{ left: sideNavBarOpen ? "0px" : "-200px" }}>
      {/* User Info*/}
      <UserInfo />
      {/* main options*/}

      <div className="nav">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Tweets</button>
        </li>
        <li>
          <button>Connections</button>
        </li>
        <li>
          <button>About</button>
        </li>
      </div>

      {/* secondary options  */}

      {/* log out / setting button (unsure) */}
    </div>
  );
};

export default SideNavBar;
