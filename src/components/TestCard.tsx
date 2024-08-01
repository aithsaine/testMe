"use client"
import React from 'react'
import { motion } from "framer-motion"
const TestCard = ({ name, duration, isPassed }: { name: String, duration: Number, isPassed: Boolean }) => {
    return (
        <div
            style={{ minWidth: "200px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

            className='flex  flex-col hover:scale-105 w-1/6  border-2 p-2  rounded   m-2 '>
            <div className="header-Card text-center ">
                {name}
            </div>
            <hr className='w-full text-white my-2' />
            <div className="footer-Card text-sm text-inherit flex flex-col">
                <span>Duration:{String(duration)} min</span>
                <span>{isPassed ? "passed" : "Passe exam"}</span>

            </div>
            <motion.button

                onClick={() => { console.log("first") }}
                whileTap={{ scale: isPassed ? 1 : 0.9 }}
                className={`bg-gradient-to-r cursor-pointer w-full ${isPassed ? "bg-zinc-600 disabled text-gray-400 " : "from-sky-300 to-blue-500"} flex justify-center py-1 px-8 rounded  `}> Pass test</motion.button>

        </div>
    )
}

export default TestCard