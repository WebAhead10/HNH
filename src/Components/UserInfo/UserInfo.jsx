import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./style.css";

const UserInfo = ({ sideNavBarOpen }) => {
  return (
    <div className="mainDivUserInfo">
      <AccountCircleIcon
        style={{ margin: "auto", width: "100%", height: "200px" }}
        className="stam"
      />
      {/* take user name from auth || cookies ??? */}
      <p>User Name</p>
    </div>
  );
};

export default UserInfo;
