import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layouts = ({children}) => {
  return (
    <>
    <Navbar></Navbar>
    <div>{children}</div>
    <Footer></Footer>
    </>
     
  )
}

export default Layouts