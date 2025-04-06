import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ProductUpload = () => {
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

  const inputChange = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    postData("/api/v1/create-proinfo", formFields).then((res) => {
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
      });
    });
    navigate("/product");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Info Upload</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/product">
              Product
            </Link>
            <Link underline="hover" color="inherit" href="/product/upload">
              Product info Upload
            </Link>
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addProduct}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <h5 className="mb-4">Product Additional Information</h5>

                <div className="row">
                <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT productId</h6>
                      <input
                        type="text"
                        placeholder="Product itemWeight"
                        name="productId"
                        onChange={inputChange}
                        value={formFields.productId}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT itemWeight</h6>
                      <input
                        type="text"
                        placeholder="Product itemWeight"
                        name="itemWeight"
                        onChange={inputChange}
                        value={formFields.itemWeight}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT itemForm</h6>
                      <input
                        type="text"
                        placeholder="ProductitemForm"
                        name="itemForm"
                        onChange={inputChange}
                        value={formFields.itemForm}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>manufacturer</h6>
                      <input
                        type="text"
                        name="manufacturer"
                        onChange={inputChange}
                        placeholder="Product manufacturer"
                        value={formFields.manufacturer}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>netQuantity</h6>
                      <input
                        type="text"
                        name="netQuantity"
                        onChange={inputChange}
                        placeholder="netQuantity"
                        value={formFields.netQuantity}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">modelNumber</h6>
                      <input
                        type="text"
                        name="modelNumber"
                        onChange={inputChange}
                        placeholder="modelNumber"
                        value={formFields.modelNumber}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>countryOfOrigin</h6>
                      <input
                        type="text"
                        name="countryOfOrigin"
                        onChange={inputChange}
                        placeholder="countryOfOrigin"
                        value={formFields.countryOfOrigin}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>productDimensions</h6>
                      <input
                        type="text"
                        name="productDimensions"
                        onChange={inputChange}
                        value={formFields.productDimensions}
                        placeholder="productDimensions"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>asin</h6>
                      <input
                        type="text"
                        name="asin"
                        onChange={inputChange}
                        value={formFields.asin}
                        placeholder="asin"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>specificUses</h6>
                      <input
                        type="text"
                        name="specificUses"
                        onChange={inputChange}
                        value={formFields.specificUses}
                        placeholder="specificUses"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>itemHeight</h6>
                      <input
                        type="text"
                        name="itemHeight"
                        onChange={inputChange}
                        value={formFields.itemHeight}
                        placeholder="itemHeight"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>itemWidth</h6>
                      <input
                        type="text"
                        name="itemWidth"
                        onChange={inputChange}
                        value={formFields.itemWidth}
                        placeholder="itemWidth"
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit" className="btn-blue btn-lg btn-big">
                  <FaCloudUploadAlt />
                  &nbsp;Publish Product
                </Button>
                <br />
              </div>
            </div>

            <div className="col-sm-3">
              <div className="stickyBox">
                <h4 className="text">Product Images</h4>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
