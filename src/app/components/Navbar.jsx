import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-black text-white w-full h-16 sticty text-xl '>
        <ul className='flex justify-center items-center h-full '>
            <li><Link href="/Home" className='pr-2 sm:pr-6 md:pr-7 lg:pr-8 '> Home</Link></li>
            <li><Link href="/TiaTacToe" className='pr-2 sm:pr-6 md:pr-7 lg:pr-8 '> Game</Link></li>
            <li><Link href="/DragandDrop" className='pr-2 sm:pr-6 md:pr-7 lg:pr-8 '> Drag & drop</Link></li>
            <li><Link href="/CustomUI" className=' sm:pr-6 md:pr-7 lg:pr-8 '> Custom Ui</Link></li>
        </ul>
    </div>
  )
}
