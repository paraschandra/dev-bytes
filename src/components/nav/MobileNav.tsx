import React from 'react'
import NavItems from './nav-items'

export default function MobileNav() {
  return (
    <nav className='sm:hidden py-4 border-t-2 fixed w-full bottom-0 rounded-t-xl
    bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    >
        <div className="flex items-center justify-evenly">
            <NavItems url='/' name='Home' icon={true}/>
            <NavItems url='/blog' name='Blog' icon={true}/>
            <NavItems url='/tags' name='Tags' icon={true}/>
            <NavItems url='/about' name='About' icon={true}/>
        </div>
    </nav>
  )
}
