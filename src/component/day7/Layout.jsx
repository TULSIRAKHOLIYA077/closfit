import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <header className="bg-[#f0f0f0] p-4">
        <nav>
          <Link to="/home" className="mr-6">Home</Link>
          <Link to="/about" className="mr-6">About</Link>
          <Link to="/contact" className="mr-6">Contact</Link>
          <Link to="/user/tulsi">Tulsi's Profile</Link>
        </nav>
      </header>


      <main className="p-3">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout