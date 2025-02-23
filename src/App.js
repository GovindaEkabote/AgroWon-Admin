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
import ProductDetails from "./pages/ProductDetails";
import ProductUpload from "./pages/ProductUpload"
const MyContext = createContext();

function App() {
  const [isToggleSlider, setIsToggleSlider] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarHeader, setisHideSidebarHeader] = useState(false);
  const [themeMode, setthemeMode] = useState(true);

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

  const values = {
    isToggleSlider,
    setIsToggleSlider,
    isLogin,
    setIsLogin,
    isHideSidebarHeader,
    setisHideSidebarHeader,
    themeMode,
    setthemeMode,
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
              <Route path="/product/upload" exact={true} element={<ProductUpload  />} />
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
