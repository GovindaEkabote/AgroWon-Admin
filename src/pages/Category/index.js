import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { GiPencil } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import {
  deleteDataApi,
  editDataFromApi,
  fetchDataFromApi,
} from "../../utils/api";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";

const Category = () => {
  const [catData, setCatDate] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = useState(1);
  // const [editFields, setEditFields] = useState({});
  const [editId, setEditId] =  useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDataFromApi("/api/v1/get-category").then((result) => {
      setCatDate(result);
      console.log(result);
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const editCategory = async (id) => {
    setFormFields({
      name: "",
      images: "",
      color: "",
    });
    setOpen(true);
    setEditId(id);
    const result = await fetchDataFromApi(`/api/v1/get-category/${id}`);
    setFormFields({
      name: result.category.name || "",
      images: result.category.images?.[0] || "",
      color: result.category.color || "",
    });
  };

  const categoryEditSubmit = (e) => {
    e.preventDefault();
    editDataFromApi(`/api/v1/update-caterory/${editId}`, formFields).then(
      (result) => {
        fetchDataFromApi("/api/v1/get-category").then((result) => {
          setCatDate(result);
          console.log(result);
        });
      }
    );
  };

  const changeInput = (e) => {
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };
  const addImgUrl = (e) => {
    const arr = [];
    arr.push(e.target.value);
    setFormFields(() => ({ ...formFields, [e.target.name]: arr }));
  };

  const deleteCategory = (id) => {
    deleteDataApi(`/api/v1/delete-categories/${id}`).then((res) => {
      fetchDataFromApi("/api/v1/get-category").then((result) => {
        setCatDate(result);
        console.log(result);
      });
    });
  };
  const handleChange = (event, value) => {
    fetchDataFromApi(`/api/v1/get-category?page=${value}`).then((result) => {
      setCatDate(result);
      console.log(result);
    });
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsice mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>CATEGORIES</th>
                  <th>IMAGES</th>
                  <th>COLORS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {catData?.categoryList?.length !== 0 &&
                  catData?.categoryList?.map((item, index) => {
                    return (
                      <tr key={item.id || index}>
                        <td>#{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                              <div className="img">
                                <img
                                  src={item.images[0]}
                                  alt="img"
                                  className="w-100"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flexCol">
                            <span
                              className="dot"
                              style={{ background: item.color }}
                            ></span>
                            &nbsp; {item.color}
                          </div>
                        </td>
                        <td>
                          <div className="actions d-flex align-items-center">
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
                              onClick={() => deleteCategory(item._id)}
                            >
                              <MdDelete />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex tableFooter">
              <Link to={"/categories/add"}>
                <Button className="btn-blue btn-lg btn-big">
                  ADD CATEGORY
                </Button>
              </Link>
              <Pagination
                count={catData?.totalPages}
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

      <Dialog className="editModel" open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <h4>Edit Category</h4>
          </DialogContentText>
          <form onSubmit={categoryEditSubmit}>
            <div className="form-group mb-3">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Category Name"
                type="text"
                fullWidth
                value={formFields.name}
                onChange={changeInput}
              />
            </div>

            <div className="form-group mb-3">
              <TextField
                margin="dense"
                id="images"
                name="images"
                label="Category Image"
                type="text"
                fullWidth
                value={formFields.images}
                onChange={addImgUrl}
              />
            </div>
            <div className="form-group mb-3">
            <TextField
              margin="dense"
              id="color"
              name="color"
              label="Color"
              type="text"
              fullWidth
              value={formFields.color}
              onChange={changeInput}
            />
            </div>
            <DialogActions>
              <Button
                onClick={handleClose}
                variant="outlined"
                className="btn-red"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="btn-blue"
                onClick={handleClose}
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Category;
