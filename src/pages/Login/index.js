import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const focusInput = (index) => {
    setInputIndex(index);
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
            <form>
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
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big">
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
