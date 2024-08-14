"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from "../assets/imgs/logo.png";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex items-center justify-between py-4 px-8 bg-black bg-opacity-80 backdrop-blur-md shadow-md sticky top-0 z-50'>
            <div className='flex items-center'>
                <Image src={logo} width={100} alt='logo' />
            </div>
            <div className='hidden md:flex items-center space-x-6'>
                {links.map(link => (
                    <Link key={link.href} href={link.href} className={`text-lg transition-colors duration-300 ${currentPath == link.href ? "text-cyan-400 underline underline-offset-8" : "text-white hover:text-cyan-400"} font-mono`}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className='hidden md:flex items-center'>
                <Link href="/register" className="text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-2 px-6 rounded-full font-mono hover:from-cyan-300 hover:to-blue-400 transition-colors duration-300">
                    Register
                </Link>
            </div>
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className="text-white text-2xl">☰</button>
            </div>
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md shadow-lg p-4'>
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className={`block py-2 text-lg transition-colors duration-300 ${currentPath == link.href ? "text-cyan-400 underline underline-offset-8" : "text-white hover:text-cyan-400"} font-mono`}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/register" className="block py-2 text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-2 px-6 rounded-full font-mono hover:from-cyan-300 hover:to-blue-400 transition-colors duration-300">
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
}
