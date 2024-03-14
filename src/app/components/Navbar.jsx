import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-black text-white  w-full h-16 sticky '>
        <ul className='flex justify-center items-center h-full '>
            <li><Link href="/Home" className='pr-10 text-3xl'> Home</Link></li>
            <li><Link href="/TiaTacToe" className='text-3xl'> Game</Link></li>
        </ul>
    </div>
  )
}
