import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RiProductHuntFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
// import { MyContext } from "../../App";


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  
  // const context = useContext(MyContext);
  
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <RiProductHuntFill />
              </span>
              Products
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/product">Product List</Link>
                </li>
                <li>
                  <Link to="/product/details">Product View</Link>
                </li>
                <li>
                  <Link to="/product/upload">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 2 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(2)}
            >
              <span className="icon">
                <RiProductHuntFill />
              </span>
              Categories
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/categories">Categories List</Link>
                </li>
                <li>
                  <Link to="/categories/add"> Add Categories</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              {" "}
              <span>
                <FaLock />
              </span>
              &nbsp;Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
