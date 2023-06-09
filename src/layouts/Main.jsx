import { Outlet } from "react-router-dom"
import Home from "../components/Frontend/Home"
import Navbar from "../components/Frontend/shared/Navbar"
import Footer from './../components/Frontend/shared/Footer';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
