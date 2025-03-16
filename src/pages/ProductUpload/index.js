import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { fetchDataFromApi, postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ProductUpload = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [productRams, setProductRams] = useState([]);
  const [ratingValue, setRatingValue] = useState(2);
  const [productQuantity, setProductQuantity] = useState([]);
  const [isFeaturedValue, setisFeaturedValue] = useState(false);
  const [productImagesArr, setProductImagesArr] = useState([]);
  const [catData, setCatData] = useState([]);
  const [count,setCount] = useState(0);

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: 0,
    oldPrice: 0,
    isFeatured: false,
    countInStock: 0,
    discount: 0,
    weight: [],
    quantity: [],
    rating: 0,
    brand: "",
    // images: [],
  });

  const productImages = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDataFromApi("/api/v1/get-category?all=true")
      .then((result) => {
        setCatData(
          Array.isArray(result.categoryList) ? result.categoryList : []
        );
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChangeCategory = (event) => {
    setCategoryValue(event.target.value);
    setFormFields(() => ({
      ...formFields,
      category: event.target.value,
    }));
  };

  const handleChangeProductWeight = (event) => {
    const {
      target: { value },
    } = event;
    setFormFields((prevState) => ({
      ...prevState,
      weight: typeof value === "string" ? value.split(",") : value, // Ensure it's an array
    }));
  };

  const handleChangeProductQuantity = (event) => {
    const {
      target: { value },
    } = event;
    setFormFields((prevState) => ({
      ...prevState,
      quantity: typeof value === "string" ? value.split(",") : value, // Ensure it's an array
    }));
  };

  const handleChangeisFeaturedValue = (e) => {
    // setisFeaturedValue(event.target.value);
    setFormFields((prevState) => ({
      ...prevState,
      isFeatured: e.target.value === "true", // Convert string to boolean
    }));
  };

 
  const addProductImages = () => {
    setProductImagesArr(prevArray =>[...prevArray, productImages.current.value]);
    productImages.current.value = "";
  };

  const inputChange = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    formFields.images = productImagesArr
    postData('/api/v1/create-product',formFields).then((res) =>{
      setFormFields({
        name: "",
        description: "",
        category: "",
        subCategory: "",
        price: 0,
        oldPrice: 0,
        isFeatured: false,
        countInStock: 0,
        discount: 0,
        weight: [],
        quantity: [],
        rating: 0,
        brand: "",
        images:[]
      })
    })
    navigate("/product")
  };

const navigate = useNavigate();



  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Upload</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/product">
              Product
            </Link>
            <Link underline="hover" color="inherit" href="/product/upload">
              Product Upload
            </Link>
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addProduct}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <h5 className="mb-4">Product Information</h5>
                <div className="form-group">
                  <h6>PRODUCT NANE</h6>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    onChange={inputChange}
                    value={formFields.name}
                  />
                </div>
                <div className="form-group">
                  <h6>PRODUCT DESCRIPTION</h6>
                  <textarea
                    rows={5}
                    cols={10}
                    placeholder="Product Description"
                    className="mt-1"
                    name="description"
                    onChange={inputChange}
                    value={formFields.description}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT CATEGORY</h6>
                      <Select
                        value={categoryValue}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        {catData.length > 0 ? (
                          catData.map((cat) => (
                            <MenuItem
                              key={cat._id}
                              className="text-capitalize"
                              value={cat._id}
                            >
                              {cat.name} {/* Display name, but value is _id */}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No categories found</MenuItem>
                        )}
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT SUB CATEGORIES</h6>
                      <input
                        type="text"
                        placeholder="Add Product Sub-Category"
                        name="subCategory"
                        onChange={inputChange}
                        value={formFields.subCategory}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>PRICE</h6>
                      <input
                        type="text"
                        name="price"
                        onChange={inputChange}
                        placeholder="Product Price"
                        value={formFields.price}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE</h6>
                      <input
                        type="text"
                        name="oldPrice"
                        onChange={inputChange}
                        placeholder="Old Price "
                        value={formFields.oldPrice}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">is Featured</h6>
                      <Select
                        name="isFeatured"
                        value={formFields.isFeatured.toString()}
                        onChange={handleChangeisFeaturedValue}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="true">True</MenuItem>
                        <MenuItem value="false">False</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input
                        type="text"
                        name="countInStock"
                        value={formFields.countInStock}
                        onChange={inputChange}
                        placeholder="Enter Product Quentity"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT</h6>
                      <input
                        type="text"
                        name="discount"
                        onChange={inputChange}
                        value={formFields.inputChange}
                        placeholder="Enter Discount Amount"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT WEIGHT (Change later) </h6>
                      <Select
                        multiple
                        value={formFields.weight}
                        onChange={handleChangeProductWeight}
                        displayEmpty
                        MenuProps={MenuProps}
                        className="w-100"
                      >
                        <MenuItem value="2KG">2KG</MenuItem>
                        <MenuItem value="4KG">4KG</MenuItem>
                        <MenuItem value="8KG">8KG</MenuItem>
                        <MenuItem value="10KG">10KG</MenuItem>
                        <MenuItem value="12KG">12KG</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT RATING</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                          setFormFields(() => ({
                            ...formFields,
                            rating: newValue,
                          }));
                        }}
                        className="ratingSection"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <input
                        type="text"
                        name="brand"
                        onChange={inputChange}
                        value={formFields.inputChange}
                        placeholder="Product Brand Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT QUANTITY </h6>
                      <Select
                        value={formFields.quantity}
                        onChange={handleChangeProductQuantity}
                        multiple
                        displayEmpty
                        MenuProps={MenuProps}
                        className="w-100"
                      >
                        <MenuItem value="3Pices">3Pices</MenuItem>
                        <MenuItem value="6Pices">6Pices</MenuItem>
                        <MenuItem value="12Pices">12Pices</MenuItem>
                        <MenuItem value="18Pices">18Pices</MenuItem>
                        <MenuItem value="24Pices">24Pices</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="card p-4 mt-0">
                  <div className="imagesUploadSec">
                    <h5>Media And Published</h5>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <div className="position-relative inputBtn">
                            <input
                              type="text"
                              ref={productImages}
                              style={{ paddingRight: "100px" }}
                              placeholder="Please Enter Image URL"
                              name="images"
                              value={formFields.images}
                              onChange={inputChange}
                            />
                            <Button
                              className="btn btn-blue"
                              onClick={addProductImages}
                            >
                              ADD
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="btn-blue btn-lg btn-big" >
                  <FaCloudUploadAlt />
                  &nbsp;Publish Product
                </Button>
                <br />
              </div>
            </div>

            <div className="col-sm-3">
              <div className="stickyBox">
                <h4 className="text">Product Images</h4>
                <div className="imgGrid d-flex">
                  {productImagesArr?.length !== 0 &&
                    productImagesArr?.map((item, index) => {
                      return (
                        <div className="img" key={index}>
                          <img src={item} alt="img" />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
