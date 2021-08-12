// import React from "react";
// import "./style.css";
// import UserInfo from "../UserInfo/UserInfo";
// const SideNavBar = ({ sideNavBarOpen }) => {
//   return (
//     <div className="left" style={{ left: sideNavBarOpen ? "0px" : "-200px" }}>
//       {/* User Info*/}

//       <UserInfo sideNavBarOpen={sideNavBarOpen} />
//       {/* main options*/}

//       <div className="nav">
//         <li>
//           <button>Home</button>
//         </li>
//         <li>
//           <button>Tweets</button>
//         </li>
//         <li>
//           <button>Connections</button>
//         </li>
//         <li>
//           <button>About</button>
//         </li>
//       </div>

//       {/* secondary options  */}

//       {/* log out / setting button (unsure) */}
//     </div>
//   );
// };

// export default SideNavBar;

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarDara";
import "./Navbar.css";
import { IconContext } from "react-icons";

function SideNavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        <p>Home</p>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default SideNavBar;
