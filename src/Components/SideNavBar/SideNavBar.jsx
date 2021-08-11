import React from 'react';
import "./style.css";
import UserInfo from "../UserInfo/UserInfo";
const SideNavBar = () => {
    return (
        <div className="left">
            {/* User Info*/}
            <UserInfo />
            {/* main options*/}

            <div className="nav">
                <li ><button >Home</button></li>
                <li ><button >Tweets</button></li>
                <li ><button >Connections</button></li>
                <li ><button >About</button></li>
            </div>

            {/* secondary options  */}

            {/* log out / setting button (unsure) */}

        </div>
    )
}

export default SideNavBar;
