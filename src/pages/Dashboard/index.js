import React, { useState } from "react";
import DashboardBox from "./components/DashboardBox";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaBagShopping } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { Button } from "@mui/material";
import { RxDotsVertical } from "react-icons/rx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegClock } from "react-icons/fa";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { LuEyeClosed } from "react-icons/lu";
import { GiPencil } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

import img from "../../assets/images/Govinda.jpg";

import Pagination from "@mui/material/Pagination";

const ITEM_HEIGHT = 48;

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showsetCatBy, setCatBy] = useState("");

  const handleChange = (e) => {
    setShowBy(e.target.value);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#98BDFF", "#b1d6f0"]}
                icon={<FaRegUser />}
                grow={true}
              />
              <DashboardBox
                color={["#4B49AC", "#b4b2f7"]}
                icon={<TiShoppingCart />}
              />
              <DashboardBox
                color={["#7978E9", "#b2b1f2"]}
                icon={<FaBagShopping />}
              />
              <DashboardBox color={["#F3797E", "#f2bdbf"]} icon={<WiStars />} />
            </div>
          </div>

          <div className="col-md-4 pl-0 ">
            <div className="box graphBox ">
              <div className="d-flex align-items-center w-100  bottomEle">
                <h4 className="text-white mb-0 mt-0">Last Month</h4>

                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <RxDotsVertical />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "18ch",
                          opacity: "0.9",
                          borderRadius: "1ch",
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <FaRegClock /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FaRegClock /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FaRegClock /> Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FaRegClock /> Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold ml-4">$3,54,789</h3>
              <p className="text-white  ml-4">$5,45,8 in last month</p>
              <Button className="w-100 charts">
                <TrendingUpIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                className="w-100"
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  inputProps={{ "aria-label": "without label" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                className="w-100"
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  inputProps={{ "aria-label": "without label" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={showsetCatBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>brand BY</h4>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                className="w-100"
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  inputProps={{ "aria-label": "without label" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                className="w-100"
              >
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  inputProps={{ "aria-label": "without label" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsice mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORFER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                          Product Description Write here for a good proctice as
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img} alt="img" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Product Description Write here for a good proctice as
                          per industry standard
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Woman</td>
                  <td>Gucci</td>
                  <td>
                    <div>
                      <del className="old">$12.5</del>
                      <span className="new text-danger">$12.5</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>38K</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <LuEyeClosed />
                      </Button>
                      <Button className="success" color="success">
                        <GiPencil />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex tableFooter">
              <p>
                Showing <b>12</b> of <b>60</b> result
              </p>
              <Pagination
                count={50}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
