"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../assets/imgs/logo.png"
import { usePathname } from 'next/navigation'

export default function Nav() {
    const currentPath = usePathname()
    const links = [
        {
            name: "Home",
            href: "/",
        }, {
            name: "Tests",
            href: "/tests",
        }, {
            name: "About Us",
            href: "/about",
        }, {
            name: "Contact",
            href: "/contact",
        },
    ]
    return (
        <nav className='flex   items-center py-2 px-6 '>
            <div className='text-white'>
                <Image src={logo} width={100} alt='logo' />
            </div>
            <div className='space-x-4  p-4 rounded-2xl  bg'>
                {
                    links.map(link => <Link key={link.href} className={`text-xl transition-colors ${currentPath == link.href ? "text-zinc-500" : " w-[50px]"} hover:text-zinc-500 hover:backdrop-blur-3xl hover:border-separate hover:border-cyan-400 text-white font-mono`} href={link.href}>{link.name}</Link>)
                }

            </div>
        </nav>
    )
}
