import { Route, Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Layout from "./Layout"
import User from "./User"

const DashBoard = () => {
  return (
<Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:username" element={<User/>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Route>
    </Routes>  )
}

export default DashBoard