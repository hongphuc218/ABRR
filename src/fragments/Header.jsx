import React, {useState} from 'react'
import logo from "../photos/Logo-3.png"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(true)

    const toggleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='text-beige w-full bg-dark-green fixed top-0 z-30'>
        <div className='max-w-[1240px] mx-auto px-5 flex justify-between items-center h-16 md:h-24'> 
            <div className='flex gap-5 font-bold w-full '>
                <img src={logo} alt="logo" className='w-14 h-14 my-auto md:w-20 md:h-20'/>
                <div className=''>
                    <h1 className='text-2xl md:text-6xl'>ABBR</h1>
                    <h1 className='text-xs md:text-sm'>EQUITY & INVESTMENT</h1>
                </div>
            </div>
            <ul className='hidden md:flex gap-8'>
                <li href="" className='hover:border-b hover:border-beige cursor-pointer'>HOME</li>
                <li href="#about" className='hover:border-b hover:border-beige cursor-pointer' >ABOUT</li>
                <li href="#approach" className='hover:border-b hover:border-beige cursor-pointer'>APPROACH</li>
                <li href="#founder" className='hover:border-b hover:border-beige cursor-pointer'>FOUNDER</li>
                <li href="#contact" className='hover:border-b hover:border-beige cursor-pointer'>CONTACT</li>
            </ul>
            <div onClick={toggleNav} className='z-50 block md:hidden'>
                {!nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                 
                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-full h-full flex items-center justify-center bg-dark-green ease-in-out duration-500' : 'fixed right-[-100%]'}>
                <ul className='flex flex-col gap-20 items-center text-2xl'>
                    <li href="" >HOME</li>
                    <li href="#about" >ABOUT</li>
                    <li href="#approach" >APPROACH</li>
                    <li href="#founder" >FOUNDER</li>
                    <li href="#contact">CONTACT</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Header