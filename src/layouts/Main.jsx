import { Outlet } from "react-router-dom"
import Home from "../components/Frontend/Home"
import Navbar from "../components/Frontend/shared/Navbar"
import Footer from './../components/Frontend/shared/Footer';
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";

const Main = () => {

  
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
   const themeClass = darkMode ? 'dark' : 'light';
  
  return (
    <div className={`bg-${themeClass}-background text-${themeClass}-text`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
