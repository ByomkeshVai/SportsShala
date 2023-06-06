import { Outlet } from "react-router-dom"
import Home from "../components/Frontend/Home"
import Navbar from "../components/Frontend/shared/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Main
