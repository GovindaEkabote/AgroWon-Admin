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
    try {
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
      const productData = await fetchDataFromApi(`/api/v1/get-info/${id}`);  
      alert(productData)
      // Set form fields with product data
      setFormFields({
        productId: productData.product.productId || productData._id,
        itemWeight: productData.product.additionalInfo?.itemWeight || "",
        itemForm: productData.product.additionalInfo?.itemForm || "",
        manufacturer: productData.product.additionalInfo?.manufacturer || "",
        netQuantity: productData.product.additionalInfo?.netQuantity || "",
        modelNumber: productData.product.additionalInfo?.modelNumber || "",
        countryOfOrigin: productData.product.additionalInfo?.countryOfOrigin || "",
        productDimensions: productData.product.additionalInfo?.productDimensions || "",
        asin: productData.product.additionalInfo?.asin || "",
        specificUses: productData.product.additionalInfo?.specificUses || "",
        itemHeight: productData.product.additionalInfo?.itemHeight || "",
        itemWidth: productData.product.additionalInfo?.itemWidth || "",
      });
  
      setEditId(id);
      setOpens(true);
    } catch (error) {
      console.error("Error in editCategory:", error);
    }
  };
  
  const categoryEditSubmit = async (e) => {
    e.preventDefault(); // <-- Prevents form submission from reloading page
  
    try {
      const result = await editDataFromApi(`/api/v1/update-info/${editId}`, formFields);
      if (result?.updateInfo) {
        const updatedList = await fetchDataFromApi("/api/v1/get-info");
        setProductList(updatedList?.products || []);
        setOpens(false); // close dialog on success
      }
    } catch (err) {
      console.error("Failed to update product info:", err);
    }
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
                        <td>
                          {product.additionalInfo?.countryOfOrigin || "N/A"}
                        </td>
                        <td>
                          {product.additionalInfo?.productDimensions || "N/A"}
                        </td>
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
     
          <TextField
            margin="normal"
            name="itemWeight"
            label="Item Weight"
            fullWidth
            value={formFields.itemWeight}
            onChange={changeInput}
          />
       
          <TextField
            margin="normal"
            name="itemForm"
            label="Item Form"
            fullWidth
            value={formFields.itemForm}
            onChange={changeInput}
          />
       
          <TextField
            margin="normal"
            name="manufacturer"
            label="Manufacturer"
            fullWidth
            value={formFields.manufacturer}
            onChange={changeInput}
          />
       
          <TextField
            margin="normal"
            name="netQuantity"
            label="Net Quantity"
            fullWidth
            value={formFields.netQuantity}
            onChange={changeInput}
          />
       
          <TextField
            margin="normal"
            name="modelNumber"
            label="Model Number"
            fullWidth
            value={formFields.modelNumber}
            onChange={changeInput}
          />
       
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClosed} color="secondary">
        Cancel
      </Button>
      <Button type="submit" color="primary" variant="contained">
        Save Changes
      </Button>
    </DialogActions>
  </form>
</Dialog>
    </>
  );
};

export default Product;
