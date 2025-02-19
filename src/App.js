import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const MyContext = createContext();

function App() {
  const [isToggleSlider, setIsToggleSlider] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarHeader, setisHideSidebarHeader] = useState(false);

  const values = {
    isToggleSlider, setIsToggleSlider,
    isLogin, setIsLogin,isHideSidebarHeader, setisHideSidebarHeader
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    {
      isHideSidebarHeader !== true &&   <Header />
    }
     
      <div className="main d-flex">
      {
        isHideSidebarHeader !== true && 
        <div className={`sidebarWrapper ${isToggleSlider === true ? 'toggle': ''}`}>
          <Sidebar />
        </div>
      }
       
        <div className={`content ${isHideSidebarHeader === true && 'full'} ${isToggleSlider === true ? 'toggle': ''}` }>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/signup" exact={true} element={<SignUp />} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
export {MyContext}