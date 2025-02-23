import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProductUpload = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const [ratingValue, setRatingValue] = React.useState(2);

  const handleChangeCategory = (event) => {
    setCategoryValue(event.target.value);
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
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem className="text-capitalize">Fertilizer</MenuItem>
                        <MenuItem className="text-capitalize">Fruits</MenuItem>
                        <MenuItem className="text-capitalize">Flower</MenuItem>
                        <MenuItem className="text-capitalize">Sea Food</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT BRAND</h6>
                      <Select
                        value={categoryValue}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <input type="text" placeholder="Regular Product Price" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <input type="text" placeholder="Discount Product Price" />
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
                      <h6>PRODUCT STOCK</h6>
                      <input type="text" placeholder="Discount Product Price" />
                    </div>
                  </div>
                </div>
                <Button className="btn-blue btn-lg btn-big"><FaCloudUploadAlt />&nbsp;Publish Product</Button>
                <br/>
              </div>
            </div>
          </div>
        </form>
        
      </div>
    </>
  );
};

export default ProductUpload;
