"use strict"
"use client"
import React from 'react'
import { LuFlaskRound } from 'react-icons/lu'
import { motion } from "framer-motion"

export default function Page() {
    return (
        <div className='flex items-center px-6 min-h-screen space-x-2 justify-center text-white text-4xl'>
            <div style={{ width: "60px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }} className=" flex flex-col rounded-xl h-screen py-4 space-y-4 bg-00">
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
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>My tests</motion.span>
                </div><div onMouseEnter={(e) => {
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
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>My tests</motion.span>
                </div><div onMouseEnter={(e) => {
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
                    <motion.span variants={{}} className='-right-14 hidden z-50 fixed font-bold text-sm'>My tests</motion.span>
                </div>

            </div>
            <div style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 4px rgba(227,228,237)" }} className="w-full h-screen rounded-xl -z-10 "></div>
        </div >
    )
}






