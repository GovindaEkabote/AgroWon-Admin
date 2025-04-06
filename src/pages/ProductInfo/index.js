import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
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

const Product = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [catData, setCatData] = useState({ categoryList: [] }); // Ensure correct structure
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formFields, setFormFields] = useState({
    productId: "",
    itemWeight: "",
    itemForm: "",
    manufacturer: "",
    netQuantity: "",
    modelNumber: "",
    countryOfOrigin: "",
    productDimensions: "",
    asin: "",
    specificUses: "",
    itemHeight: "",
    itemWidth: "",
  });
  const [opens, setOpens] = useState(false);

  const handleClosed = () => {
    setOpens(false);
  };

  // useEffect(() => {
  //   fetchDataFromApi("/api/v1/get-category").then((result) => {
  //     setCatData(result);
  //   });
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDataFromApi("/api/v1/get-info").then((res) => {
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
      productId: "",
      itemWeight: "",
      itemForm: "",
      manufacturer: "",
      netQuantity: "",
      modelNumber: "",
      countryOfOrigin: "",
      productDimensions: "",
      asin: "",
      specificUses: "",
      itemHeight: "",
      itemWidth: "",
    });
    setOpens(true);
    setEditId(id);
    const selectedProduct = await fetchDataFromApi(`/api/v1/get/${id}`);
    setFormFields({
      productId: selectedProduct.product.productId,
      itemWeight: selectedProduct.product.itemWeight,
      itemForm: selectedProduct.product.itemForm,
      manufacturer: selectedProduct.product.manufacturer,
      netQuantity: selectedProduct.product.netQuantity,
      modelNumber: selectedProduct.product.modelNumber,
      countryOfOrigin: selectedProduct.product.countryOfOrigin,
      productDimensions: selectedProduct.product.productDimensions,
      asin: selectedProduct.product.asin,
      specificUses: selectedProduct.product.specificUses,
      itemHeight: selectedProduct.product.itemHeight,
      itemWidth: selectedProduct.product.itemWidth,
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
  {productList.length > 0 ? (
    productList
      .filter((product) => product.productId) // Only show products with productId
      .map((product, index) => (
        <tr key={product._id || index}>
          <td>{index + 1}</td>
          <td>{product.productId}</td>
          {/* Additional Info Fields */}
          <td>{product.additionalInfo?.itemWeight || "N/A"}</td>
          <td>{product.additionalInfo?.itemForm || "N/A"}</td>
          <td>{product.additionalInfo?.manufacturer || "N/A"}</td>
          <td>{product.additionalInfo?.netQuantity || "N/A"}</td>
          <td>{product.additionalInfo?.modelNumber || "N/A"}</td>
          <td>{product.additionalInfo?.countryOfOrigin || "N/A"}</td>
          <td>{product.additionalInfo?.productDimensions || "N/A"}</td>
          <td>{product.additionalInfo?.asin || "N/A"}</td>
          <td>{product.additionalInfo?.specificUses || "N/A"}</td>
          <td>{product.additionalInfo?.itemHeight || "N/A"}</td>
          <td>{product.additionalInfo?.itemWidth || "N/A"}</td>
          
          <td>
            <div className="actions d-flex align-items-center">
              <Button className="secondary" color="secondary">
                <Link to={`/product/details/${product._id}`}>
                  <LuEyeClosed />
                </Link>
              </Button>
              <Button
                className="success"
                color="success"
                onClick={() => editCategory(product._id)}
              >
                <GiPencil />
              </Button>
              <Button
                className="error"
                color="error"
                onClick={() => deleteProduct(product._id)}
              >
                <MdDelete />
              </Button>
            </div>
          </td>
        </tr>
      ))
  ) : (
    <tr>
      <td colSpan="16">No products found</td>
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
