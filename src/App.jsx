import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

const App = () => {
  return (
    <div className='bg-[#202020] min-h-screen w-full'>


      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App