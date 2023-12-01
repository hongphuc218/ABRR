import React from 'react'
import logo from "../photos/Logo-3.png"
import { FaRegCopyright, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-dark-green flex flex-col justify-center items-center py-5 text-beige'>
      <img src={logo} alt="logo" className='w-14 h-14 my-auto md:w-20 md:h-20'/>
      <h1 className='text-2xl md:text-6xl'>ABBR</h1>
      <h1 className='text-xs md:text-sm'>EQUITY & INVESTMENT</h1>
      <div className='flex gap-2 text-xl text-light-green'>
        <FaFacebook className='text-[#4267B2]'/>
        <FaWhatsapp className='text-[#25d366]'/>
        <FaInstagram className='text-[#E1306C]'/>
      </div>
      <div className='w-full bg-light-green py-2 mt-5 flex items-center justify-center'>
       <FaRegCopyright /><p>2023 Copyright ABBR Equity & Investment</p>
      </div>
    </div>
  )
}

export default Footer