import React, { useEffect, useState } from "react";
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
import {
  fetchDataFromApi,
  deleteDataApi,
  editDataFromApi,
} from "../../utils/api";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { LuEyeClosed } from "react-icons/lu";
import { GiPencil } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";

const ITEM_HEIGHT = 48;

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
   const [showsetCatBy, setShowsetCatBy] = useState(""); // Selected category
    const [catData, setCatData] = useState({ categoryList: [] });
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [opens, setOpens] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    brand: "",
    price: 10,
    countInStock: 1,
    ifFeatured: "",
    subCategory: "",
  });

  const handleClosed = () => {
    setOpens(false);
  };

 useEffect(() => {
     fetchDataFromApi("/api/v1/get-category").then((result) => {
       setCatData(result);
     });
   }, []);
 
   // Handle category selection
   const handleChangeCategory = (e) => {
     setShowsetCatBy(e.target.value);
   };
 
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDataFromApi("/api/v1/get-product").then((res) => {
        setProductList(res);
    });
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

 const editCategory =async (id) => {
     setFormFields({
       name: "",
       description:"",
       brand:"",
       price:"",
       countInStock:"",
     });
     setOpens(true);
     setEditId(id);
     const selectedProduct = await fetchDataFromApi(`/api/v1/get/${id}`);
       setFormFields({
         name: selectedProduct.product.name,
         description: selectedProduct.product.description,
         brand: selectedProduct.product.brand,
         price: selectedProduct.product.price,
         countInStock: selectedProduct.product.countInStock,
       });
     setOpens(true);
   };

  const categoryEditSubmit = (e) => {
    e.preventDefault();
    editDataFromApi(`/api/v1/update/${editId}`, formFields).then((result) => {
      fetchDataFromApi("/api/v1/get-product").then((res) => {
        setProductList(res);
      });
    });
  };

  const changeInput = (e) => {
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };

  const deleteProduct = (id) => {
    deleteDataApi(`/api/v1/delete-product/${id}`).then((res) => {
      fetchDataFromApi("/api/v1/get-product").then((res) => {
        setProductList(res);
      });
    });
  };

  const handleChange = (event, value) => {
    fetchDataFromApi(`/api/v1/get-product?page=${value}`).then((result) => {
      setProductList(result);
      console.log(result);
    });
  };


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const totalProduct = (page) => {
    fetchDataFromApi(`/api/v1/get-product?page=${page}`).then((result) => {
      console.log("Fetched Data:", result); // Debugging
      setProductList(result.products || []);
    });
  }
  useEffect(()=>{
    totalProduct();
  },[]);
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
                name={"Total User"}
                number={277}
              />
              <DashboardBox
                color={["#4B49AC", "#b4b2f7"]}
                icon={<TiShoppingCart />}
                name={"Total Orders"}
                number={5775}
              />
              <DashboardBox
                color={["#7978E9", "#b2b1f2"]}
                icon={<FaBagShopping />}
                name={"Total Products"}
                number={productList?.totalPosts || 0}
              />
              <DashboardBox
                color={["#F3797E", "#f2bdbf"]}
                icon={<WiStars />}
                name={"Total Reviews"}
                number={17}
              />
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
                  onChange={handleChangeCategory}
                  className="w-100"
                >
                  <MenuItem value="">None</MenuItem>
                  {catData?.categoryList?.length > 0 &&
                    catData.categoryList.map((item, index) => (
                      <MenuItem key={item._id || index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
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
              {productList?.products?.length !== 0 ? (
                productList?.products?.map((item, index) => (
                    <tr key={item._id || index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div className="imgWrapper">
                            <div className="img">
                              <img
                                src={item.images?.[0]?.url}
                                className="w-100"
                                alt={item.name}
                              />
                            </div>
                          </div>
                          <div className="info pl-0">
                            <h6>{item.name}</h6>
                            <p>{item.description?.split("\n")[0]}</p>
                          </div>
                        </div>
                      </td>
                      <td>{item.category?.name || "N/A"}</td>
                      <td>{item.brand || "Unknown"}</td>
                      <td>
                        <div>
                          {item.oldPrice && (
                            <del className="old">₹{item.oldPrice}</del>
                          )}
                          <span className="new text-danger">
                            ₹ {item.price}
                          </span>
                        </div>
                      </td>
                      <td>{item.countInStock}</td>
                      <td>
                        {item.rating} ({Math.floor(Math.random() * 50)})
                      </td>
                      <td>{Math.floor(Math.random() * 500)}</td>
                      <td>{Math.floor(Math.random() * 50)}K</td>
                      <td>
                        <div className="actions d-flex align-items-center">
                          <Button className="secondary" color="secondary">
                            <LuEyeClosed />
                          </Button>
                          <Button
                            className="success"
                            color="success"
                            onClick={() => editCategory(item._id)}
                          >
                            <GiPencil />
                          </Button>
                          <Button
                            className="error"
                            color="error"
                            onClick={() => deleteProduct(item._id)}
                          >
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No products found</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="d-flex tableFooter">
              <Pagination
                count={productList?.totalPages} 
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={opens} onClose={handleClosed}>
        <form onSubmit={categoryEditSubmit}>
          <DialogContent>
            <DialogContentText>Edit Product</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Product Name"
              type="text"
              fullWidth
              value={formFields.name || ""}
              onChange={changeInput}
            />

            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              value={formFields.description || ""}
              onChange={changeInput}
            />

            <TextField
              margin="dense"
              name="brand"
              label="Brand"
              type="text"
              fullWidth
              value={formFields.brand || ""}
              onChange={changeInput}
            />

            <TextField
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={formFields.price || ""}
              onChange={changeInput}
            />

            <TextField
              margin="dense"
              name="countInStock"
              label="Stock"
              type="number"
              fullWidth
              value={formFields.countInStock || ""}
              onChange={changeInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosed} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={handleClosed}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Dashboard;
