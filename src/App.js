import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import ProductDetails from "./pages/ProductDetails";
import ProductUpload from "./pages/ProductUpload";
import ProductInfoUpload from "./pages/ProductInfoUpload";
import CategoryAdd from "./pages/CategoryAdd";
import Category from "./pages/Category";
const MyContext = createContext();

function App() {
  const [isToggleSlider, setIsToggleSlider] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarHeader, setisHideSidebarHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [themeMode, setthemeMode] = useState(true);
  const [baseUrl, setBaseUrl] = useState(
    "http://localhost:4001/api/v1/get-product"
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    userId:""
  });

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  useEffect(() =>{
    const token = localStorage.getItem('token')
    if(token !== null && token !== ''){
      setIsLogin(true)
      const userData =JSON.parse(localStorage.getItem('user'));
      setUser(userData)
    }else{
      setIsLogin(false)
    }
  },[isLogin])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {});

  const values = {
    isToggleSlider,
    setIsToggleSlider,
    isLogin,
    setIsLogin,
    isHideSidebarHeader,
    setisHideSidebarHeader,
    themeMode,
    setthemeMode,
    windowWidth,
    baseUrl,
    user,
    setUser,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHideSidebarHeader !== true && <Header />}
        <div className="main d-flex">
          {isHideSidebarHeader !== true && (
            <div
              className={`sidebarWrapper ${
                isToggleSlider === true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}

          <div
            className={`content ${isHideSidebarHeader === true && "full"} ${
              isToggleSlider === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signup" exact={true} element={<SignUp />} />
              <Route path="/product" exact={true} element={<Product />} />
              <Route
                path="/product/upload"
                exact={true}
                element={<ProductUpload />}
              />
              <Route
                path="/categories/add"
                exact={true}
                element={<CategoryAdd />}
              />
              <Route path="/categories" exact={true} element={<Category />} />
              <Route
                path="/product-info"
                exact={true}
                element={<ProductInfo />}
              />
              <Route
                path="/product/upload/info"
                exact={true}
                element={<ProductInfoUpload />}
              />

              <Route
                path="/product/details"
                exact={true}
                element={<ProductDetails />}
              />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
