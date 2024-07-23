"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function page() {
    return (
        <div className='flex space-y-4 flex-col items-center justify-center'>
            <h1 className='text-white text-2xl uppercase'>Register</h1>

            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="email" placeholder='email...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="password" placeholder='password...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>

            <motion.button
                whileTap={{ scale: 0.9 }}
                className={"bg-gradient-to-r md:w-1/4 w-1/2 from-orange-100 text-lg py-1 px-8 rounded to-orange-700"}>Login</motion.button>

            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <Link href={"/register"} className='rounded p-1'

                >create new account</Link >
            </div>
        </div>
    )
}
