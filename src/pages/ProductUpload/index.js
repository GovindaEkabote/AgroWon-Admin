import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import img from "../../assets/images/srk.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoImages } from "react-icons/io5";

const ProductUpload = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [productRams, setProductRams] = useState([]);
  const [ratingValue, setRatingValue] = useState(2);
  const [productQuantity, setProductQuantity] = useState([]);
  const [isFeaturedValue, setisFeaturedValue] = useState(true);

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
  };

  const handleChangeSubCategory = (event) => {
    setSubCatVal(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    const {
      target: { value },
    } = event;
    setProductRams(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeProductQuantity = (event) => {
    const {
      target: { value },
    } = event;
    setProductQuantity(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeisFeaturedValue = (event) => {
    setisFeaturedValue(event.target.value);
  };
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

        <form className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4 mt-0">
                <h5 className="mb-4">Product Information</h5>
                <div className="form-group">
                  <h6>PRODUCT NANE</h6>
                  <input type="text" placeholder="Product Name" />
                </div>
                <div className="form-group">
                  <h6>PRODUCT DESCRIPTION</h6>
                  <textarea
                    rows={5}
                    cols={10}
                    placeholder="Product Description"
                    className="mt-1"
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
                        <MenuItem
                          className="text-capitalize"
                          value="Vegetables"
                        >
                          Vegetables
                        </MenuItem>
                        <MenuItem className="text-capitalize" value="Fruits">
                          Fruits
                        </MenuItem>
                        <MenuItem className="text-capitalize" value="Flower">
                          Flower
                        </MenuItem>
                        <MenuItem
                          className="text-capitalize"
                          value="Organic-Fertilizer"
                        >
                          Organic-Fertilizer
                        </MenuItem>
                        <MenuItem
                          className="text-capitalize"
                          value="Inorganic-Fertilizer"
                        >
                          Inorganic-Fertilizer
                        </MenuItem>
                        <MenuItem className="text-capitalize" value="Non-Veg">
                          Non-Veg
                        </MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT SUB CATEGORIES</h6>
                      <Select
                        value={subCatVal}
                        onChange={handleChangeSubCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="Apple">Apple</MenuItem>
                        <MenuItem value="Banana">Banana</MenuItem>
                        <MenuItem value="Kiwi">Kiwi</MenuItem>
                      </Select>
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
                        placeholder="Product Price"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE</h6>
                      <input
                        type="text"
                        name="oldPrice"
                        placeholder="Old Price "
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">is Featured</h6>
                      <Select
                        value={isFeaturedValue}
                        onChange={handleChangeisFeaturedValue}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="True">True</MenuItem>
                        <MenuItem value="False">False</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input
                        type="text"
                        name="countInStock"
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
                        placeholder="Enter Discount Amount"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT WEIGHT (Change later) </h6>
                      <Select
                        multiple
                        value={productRams}
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
                        name="price"
                        placeholder="Product Brand Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT QUANTITY </h6>
                      <Select
                        value={productQuantity}
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
                    <div className="imgUploadBox d-flex align-items-center">
                      <div className="uploadBox">
                        <span className="remove">
                          <IoCloseSharp />
                        </span>
                        <div className="box">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            className="w-100"
                            src={img} // use normal <img> attributes as props
                          />
                        </div>
                      </div>
                      <div className="uploadBox">
                        <input type="file" multiple name="images" />
                        <div className="info">
                          <IoImages />
                          <h5>image Upload</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="btn-blue btn-lg btn-big">
                  <FaCloudUploadAlt />
                  &nbsp;Publish Product
                </Button>
                <br />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
