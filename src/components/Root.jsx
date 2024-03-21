import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'



const Root= () => {  
  return (
    <>
      <div className=' bg-[#161616] w-full h-full md:flex'>
        <div className=''>
         <Navbar/>
        </div>
        
        <main className=' md:w-full md:pl-[20%]'>
          <div className=' p-12'>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}

export default Root