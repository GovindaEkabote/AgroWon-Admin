import React, { useEffect, useState } from "react";
import DashboardBox from "../Dashboard/components/DashboardBox";
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
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router";
import {
  deleteDataApi,
  editDataFromApi,
  fetchDataFromApi,
} from "../../utils/api";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

const ITEM_HEIGHT = 48;

const Product = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showsetCatBy, setShowsetCatBy] = useState(""); // Selected category
  const [catData, setCatData] = useState({ categoryList: [] }); // Ensure correct structure
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    brand: "",
    price: 10,
    countInStock: 1,
    ifFeatured: "",
    subCategory: "",
    category: "",
  });
  const [opens, setOpens] = useState(false);

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
      if (res?.success && Array.isArray(res.products)) {
        setProductList(res.products);
      } else {
        console.error("Invalid API response:", res);
      }
    });
  }, []);

  const deleteProduct = (id) => {
    deleteDataApi(`/api/v1/delete-product/${id}`).then((res) => {
      fetchDataFromApi("/api/v1/get-product").then((res) => {
        setProductList(res);
      });
    });
  };

  const editCategory = async (id) => {
    setFormFields({
      name: "",
      description: "",
      brand: "",
      price: "",
      countInStock: "",
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

  const categoryEditSubmit = (id) => {
    // e.preventDefault();
    editDataFromApi(`/api/v1/update/${editId}`, formFields).then((result) => {
      fetchDataFromApi("/api/v1/get-product").then((res) => {
        setProductList((prevList) =>
          prevList.filter((product) => product._id !== id)
        );
      });
    });
  };

  const handleChange = (event, value) => {
    fetchDataFromApi(`/api/v1/get-product?page=${value}`).then((result) => {
      setProductList(result);
    });
  };

  const changeInput = (e) => {
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
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
        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>
          <div className="table-responsice mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "150px" }}>productId</th>
                  <th>itemWeight</th>
                  <th>itemForm</th>
                  <th>manufacturer</th>
                  <th>netQuantity</th>
                  <th>modelNumber</th>
                  <th>countryOfOrigin</th>
                  <th>Dimensions</th>
                  <th>asin</th>
                  <th>specificUses</th>
                  <th>itemHeight</th>
                  <th>itemWidth</th>
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
                            <Link to="/product/details">
                              <LuEyeClosed />
                            </Link>
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

export default Product;
