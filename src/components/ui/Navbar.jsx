import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-zinc-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:text-zinc-300 transition-colors duration-300">
              Geography
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/country">Country</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-100 hover:text-zinc-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/about" mobile>About</NavLink>
            <NavLink to="/contact" mobile>Contact</NavLink>
            <NavLink to="/country" mobile>Country</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ to, children, mobile }) => (
  <Link
    to={to}
    className={`${
      mobile
        ? 'block px-3 py-2 rounded-md text-base font-medium'
        : 'text-zinc-100 hover:bg-white hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium'
    } text-zinc-100 hover:bg-gray-700 hover:text-white transition-colors duration-300`}
  >
    {children}
  </Link>
)

export default Navbar