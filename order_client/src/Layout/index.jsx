import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <main dir='rtl' className='min-h-[70vh] px-[5%]'>
      <Outlet/>
    </main>
    <Footer/>
      
    </>
  )
}
