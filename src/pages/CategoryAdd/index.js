import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import img from "../../assets/images/srk.jpeg";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MdReply } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const CategoryAdd = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const submit = () => {
    if (
      formFields.name !== "" &&
      formFields.images !== 0 &&
      formFields.color !== ""
    ) {
      navigate("/categories");
    } else {
      setOpen(true);
    }
  };

  const changeInput = (e) => {
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };
  const addImgUrl = (e) => {
    const arr = [];
    arr.push(e.target.value);
    setFormFields(() => ({ ...formFields, [e.target.name]: arr }));
  };
  const addCategory = async (e) => {
    e.preventDefault();

    postData("/api/v1/create", formFields).then((res) => {
      console.log(res);
    });
  };

  const categoryList = () => {
    navigate("/categories");
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">ADD CATEGORIES</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/product">
              category
            </Link>
            <Link underline="hover" color="inherit" href="/categories/add">
              Add category
            </Link>
          </Breadcrumbs>
        </div>
        <form className="form" onSubmit={addCategory}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <div className="form-group">
                  <h6>CATEGORY NANE</h6>
                  <input
                    type="text"
                    placeholder="Category Name"
                    name="name"
                    onChange={changeInput}
                  />
                </div>
                <div className="form-group">
                  <h6>IMAGE URL</h6>
                  <input
                    type="text"
                    placeholder="Image url"
                    className="mt-1"
                    name="images"
                    onChange={addImgUrl}
                  />
                </div>
                <div className="form-group">
                  <h6>COLOR</h6>
                  <input
                    type="text"
                    placeholder="Color"
                    className="mt-1"
                    name="color"
                    onChange={changeInput}
                  />
                </div>
                <div className="row">
                  <div className="col-md-3 w-100">
                    <Button
                      type="submit"
                      className="btn-blue btn-lg btn-big"
                      onClick={submit}
                    >
                      <FaCloudUploadAlt />
                      &nbsp;SUBMIT
                    </Button>
                  </div>
                  <div className="col-md-5 w-100">
                    <Button
                      type="submit"
                      className="btn-blue btn-lg btn-big"
                      onClick={categoryList}
                    >
                      <MdReply />
                      &nbsp;Category List
                    </Button>
                  </div>
                </div>

                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"PLEASE ADD THE CATEGORY"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CategoryAdd;
