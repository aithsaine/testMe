"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion"
import { LuActivity, LuFlaskRound, LuHome, LuLogOut, LuUserCircle } from 'react-icons/lu';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex py-4 items-center px-6 min-h-screen space-x-2 justify-center text-white text-4xl'>
            <div style={{ width: "60px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }} className=" flex flex-col rounded-xl h-screen py-4 space-y-4 bg-00">
                <Link href={"/"} onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuHome className='w-full' />
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>Home</motion.span>
                </Link>
                <div onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuFlaskRound className='w-full' />
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>Tests</motion.span>
                </div>
                <div onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuUserCircle className='w-full' />
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>Profile</motion.span>
                </div>
                <div onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuActivity className='w-full' />
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>Tests</motion.span>
                </div>
                <div
                    onClick={async (e) => signOut({ callbackUrl: 'http://localhost:3000/' })}

                    onMouseEnter={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.remove("hidden");
                        }
                    }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative cursor-pointer flex items-center '>

                    <LuLogOut className='w-full' />
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>LogOut</motion.span>
                </div>

            </div>
            <div style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 4px rgba(227,228,237)" }} className="w-full h-screen rounded-xl -z-10 ">{children}</div>
        </div >
    );
}

export default RootLayout