import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen max-h-fit">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout