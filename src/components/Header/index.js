import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import profile from "../../assets/images/Govinda.jpg";
import { Button, Divider } from "@mui/material";
import SearchBox from "../SearchBox";
import { IoSunnyOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { FaShieldAlt } from "react-icons/fa";
import { MyContext } from "../../App";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isnotificationsDrop, setNotificationsDrop] = useState(false);
 


  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isnotificationsDrop);

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const handleOpenNotificationsDrop = () => {
    setNotificationsDrop(true);
  };
  const handleCloseNotificationsDrop = () => {
    setNotificationsDrop(false);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center w-100">
            {/* Logo */}
            <div className="col-sm-2 part1">
              <Link className="d-flex align-items-center" to={"/"}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToggleSlider(!context.isToggleSlider)
                }
              >
                {context.isToggleSlider === false ? (
                  <AiOutlineMenuFold />
                ) : (
                  <AiOutlineMenuUnfold />
                )}
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3">
                <IoSunnyOutline />
              </Button>
              <Button className="rounded-circle mr-3">
                <AiOutlineShoppingCart />
              </Button>

              <Button className="rounded-circle mr-3">
                <MdOutlineMail />
              </Button>

              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleOpenNotificationsDrop}
                >
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={isnotificationsDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotification}
                  onClose={handleCloseNotificationsDrop}
                  onClick={handleCloseNotificationsDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Notifications (12)</h4>
                  </div>
                  <Divider className="mb-1" />
                  <div className="scroll">
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className="d-flex ">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile} alt="logo" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Govinda Ekbote </b>
                              added to his favorite Fruit
                              <b>Apple from J&K</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-3 pr-2 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">
                      View All Notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              { context.isLogin !== true ? (
               <Link to={'/login'}> <Button className="btn-blue btn-lg btn-round">Sign In</Button> </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenMyAccDrop}
                  >
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img src={profile} alt="logo" />
                      </span>
                    </div>
                    <div className="userInfo">
                      <h4>Govinda Ekbote</h4>
                      <p className="mb-0 ">@govind786</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDrop}
                    onClick={handleCloseMyAccDrop}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <FaShieldAlt />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
