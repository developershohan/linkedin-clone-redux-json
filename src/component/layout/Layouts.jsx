import Topbar from "../topbar/Topbar"
import { Outlet } from "react-router-dom"



const Layouts = () => {
  return (
    <>

        <Topbar/>

        <Outlet/>

    </>
  )
}

export default Layouts