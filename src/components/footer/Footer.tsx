import Link from 'next/link';
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='max-w-7xl mx-auto mt-8 p-10 max-sm:mb-14 flex flex-col gap-3 items-center justify-between'>
        <div className="flex gap-2 items-center">
          <Link href="mailto:paraschandra30@gmail.com">
            <IoMail className='h-6 w-6 hover:text-blue-400'/>
          </Link>
          
          <Link href="https://github.com/paraschandra">
            <IoLogoGithub className='h-6 w-6 hover:text-blue-400'/>
          </Link>
          
          <Link href="https://www.linkedin.com/in/paras-chandra/">
            <IoLogoLinkedin className='h-6 w-6 hover:text-blue-400'/>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm text-gray-400">
            <p><Link href="https://paraschandra.github.io">Paras Chandra</Link> • @2024 • Dev Bytes Blog</p>
        </div>

        <p className="text-sm text-gray-400">Built using Next JS and Markdown</p>
    </div>
  )
}