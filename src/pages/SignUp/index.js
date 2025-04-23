import React, { useContext, useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { postData } from "../../utils/api";

const SignUp = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [formfields, setFormfields] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    isAdmin: true,
  });
  const onChangeInput = (e) => {
    setFormfields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };
  const signUp = (e) => {
    e.preventDefault();
    if (formfields.name === "") {
      alert("Please Enter Name");
    }
    if (formfields.email === "") {
      alert("Please Enter email");
    }
    if (formfields.password === "") {
      alert("Please Enter password");
    }
    if (formfields.conformPassword === "") {
      alert("Please Enter conformPassword");
    }
    if (formfields.conformPassword !== formfields.password) {
      alert("Password Not Match");
     
    }
    postData("/api/v1/signup", formfields)
      .then((res) => {
        alert("Registered Successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
      });
  };

  const focusInput = (index) => {
    setInputIndex(index);
  };

  useEffect(() => {
    context.setisHideSidebarHeader(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="loginSection signUpSection">
        <div className="loginBox">
          <div className="wrapper mt-0 card border">
            <form onSubmit={signUp}>
              <h6 className="font-weight-bold ">
                Register New Account for AgroWon
              </h6>
              <div
                className={`form-group position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                  autoFocus
                  name="name"
                  onChange={onChangeInput}
                />
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                  name="email"
                  onChange={onChangeInput}
                />
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 2 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordLine />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter Your Password"
                  onFocus={() => focusInput(2)}
                  onBlur={() => setInputIndex(null)}
                  name="password"
                  onChange={onChangeInput}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 3 && "focus"
                }`}
              >
                <span className="icon">
                  <IoShieldCheckmarkSharp />
                </span>
                <input
                  type={`${
                    isShowConfirmPassword === true ? "text" : "password"
                  }`}
                  className="form-control"
                  placeholder="Confirm Your Password"
                  onFocus={() => focusInput(3)}
                  onBlur={() => setInputIndex(null)}
                  name="conformPassword"
                  onChange={onChangeInput}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() =>
                    setIsShowConfirmPassword(!isShowConfirmPassword)
                  }
                >
                  {isShowConfirmPassword === true ? (
                    <IoEyeSharp />
                  ) : (
                    <FaEyeSlash />
                  )}
                </span>
              </div>
              <div className="form-group d-flex align-items-center">
                <Button
                  type="submit"
                  className="btn-blue btn-lg w-100 btn-big mr-2"
                >
                  Register
                </Button>
                <Link to={"/"} className="w-100 ml-2">
                  <Button className="btn-blue btn-lg  w-100 btn-big ">
                    Home
                  </Button>
                </Link>
              </div>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the all Terms & Conditions."
                size="small"
                className="mt-0 mb-0"
              />
              <div className="form-group text-center mb-0">
                <div className="d-flex align-items-center justify-content-center or mt-2  mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>

                <Button
                  variant="outlined"
                  className="w-100 btn-lg btn-big loginWithGoogle"
                >
                  <span className="icon2">
                    <FcGoogle />
                  </span>
                  &nbsp; Sign In with Google
                </Button>
              </div>
            </form>
          </div>

          <div className="wrapper mt-0 card border footer p-2">
            <span className="text-center">
              already have account?{" "}
              <Link to={"/login"} className="link color">
                Login
              </Link>
              &nbsp;here.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
