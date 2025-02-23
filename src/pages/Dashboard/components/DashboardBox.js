import { Button } from "@mui/material";
import React, { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegClock } from "react-icons/fa";
const ITEM_HEIGHT = 48;

const DashboardBox = (props) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Button
      className="dashboardBox text-white"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      {props.grow === true ? (
        <span className="chart">
          <TrendingUpIcon />
        </span>
      ) : (
        <span className="chart">
          <TrendingDownIcon />
        </span>
      )}
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-black mb-0 ">{props.name}</h4>
          <span className="text-white">{props.number}</span>
        </div>
        <div className="ml-auto">
          {props.icon ? (
            <span className="icon">{props.icon ? props.icon : ""}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex align-items-center w-100 bottomEle">
      
        <h6 className="text-white mb-0 mt-0">Last Month</h6>

        <div className="ml-auto">
          <Button className="ml-auto toggleIcon m-auto" onClick={handleClick}>
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
                  opacity:"0.9",
                  borderRadius:"1ch"
                },
              },
            }}
          >
            <MenuItem onClick={handleClose} ><FaRegClock /> Last Day</MenuItem>
            <MenuItem onClick={handleClose}><FaRegClock /> Last Week</MenuItem>
            <MenuItem onClick={handleClose}><FaRegClock /> Last Month</MenuItem>
            <MenuItem onClick={handleClose}><FaRegClock /> Last Year</MenuItem>

          </Menu>
        </div>
      </div>
    </Button>
  );
};

export default DashboardBox;
