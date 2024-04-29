import React from 'react'
import Link from 'next/link'
import { IoCodeSlash } from "react-icons/io5";
import NavItems from './nav-items';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4 z-10 sticky top-0 
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    >
      <div className="flex gap-3 items-center">
        <IoCodeSlash className='text-blue-500 w-6 h-6 mb-1'/>
        <div className="group">
            <Link href="/" className='text-2xl font-bold'>
              DevBytes
            </Link>

            <div className="h-1 w-0 group-hover:w-full transition-all bg-blue-500"></div>
        </div>
      </div>

      <div className="max-sm:hidden flex items-center justify-around gap-8">
        <NavItems url='/' name='Home'/>
        <NavItems url='/blog' name='Blog'/>
        <NavItems url='/tags' name='Tags'/>
        <NavItems url='/about' name='About'/>
      </div>
    </nav>
  )
}

export default Navbar