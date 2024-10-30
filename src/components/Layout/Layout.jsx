import React from 'react'
import Navbar from '../ui/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'

const Layout = () => {
  return (
    <div>
       <Navbar/>
       <main>
        <Outlet/>
       </main>
       <Footer/>

    </div>
  )
}

export default Layout