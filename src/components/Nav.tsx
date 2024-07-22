import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../assets/imgs/logo.png"

export default function Nav() {
    return (
        <nav className='flex   items-center py-2 px-6 '>
            <div className='text-white'>
                <Image src={logo} width={100} alt='logo' />
            </div>
            <div className='space-x-4  p-4 rounded-2xl  bg'>
                <Link className='text-lg w-[50px] hover:backdrop-blur-3xl hover:border-separate hover:border-cyan-400 text-white font-mono' href={"/"}>home</Link>
                <Link className='text-lg w-[50px] hover:backdrop-blur-3xl hover:border-separate hover:border-cyan-400 text-white font-mono' href={"/"}>about</Link>
                <Link className='text-lg w-[50px] hover:backdrop-blur-3xl hover:border-separate hover:border-cyan-400 text-white font-mono' href={"/"}>features</Link>
                <Link className='text-lg w-[50px] hover:backdrop-blur-3xl hover:border-separate hover:border-cyan-400 text-white font-mono' href={"/"}>contact</Link>
            </div>
        </nav>
    )
}
