import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [formfields, setFormfields] = useState({
    email: "",
    password: "",
    isAdmin: true,
  });

  const focusInput = (index) => {
    setInputIndex(index);
  };

  const onChangeInput = (e) => {
    setFormfields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };
  const signIn = (e) => {
    e.preventDefault();

    if (formfields.email === "") {
      alert("Please Enter email");
      return;
    }
    if (formfields.password === "") {
      alert("Please Enter password");
      return;
    }

    postData("/api/v1/signin", formfields)
      .then((res) => {
        try {
          console.log("Response received:", res);
          localStorage.setItem("token", res.token);
          const user = {
            name: res.existUser?.name,
            email: res.existUser?.email,
            userID:res.existUser._id
          }
          localStorage.setItem("user",JSON.stringify(user));
          
          context.setUser({
            name: res.existUser?.name,
            email: res.existUser?.email,
            
          });
          alert("Login Successfully!");
          window.location.href='/dashboard'
        } catch (error) {
          console.log("Error in try block:", error);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    context.setisHideSidebarHeader(true);
  }, []);
  return (
    <>
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={logo} alt="" width="150px" />
            <h5 className="font-weight-bold">Login To AgroWon</h5>
          </div>

          <div className="wrapper mt-3 card border">
            <form onSubmit={signIn}>
              <div
                className={`form-group position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                  autoFocus
                  name="email"
                  onChange={onChangeInput}
                />
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordLine />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter Your Password"
                  onFocus={() => focusInput(1)}
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
              <div className="form-group">
                <Button type="submit" className="btn-blue btn-lg w-100 btn-big">
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <Link to={"/forgot-password"} className="link ">
                  FORGOT PASSWORD
                </Link>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
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

          <div className="wrapper mt-3 card border footer p-2">
            <span className="text-center">
              Don't have account?{" "}
              <Link to={"/signup"} className="link color">
                Register
              </Link>
              &nbsp;here.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
