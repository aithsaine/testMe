import React from 'react'
import { FcFlashOn } from "react-icons/fc";
import { motion } from "framer-motion"
export default function Services() {
    return (
        <section
            className='w-full'>
            <h1 className="text-xl text-teal-300">What available modules ?</h1>
            <div
                className=' w-full flex space-x-2 p-4  '
                style={{ height: "350px" }}
            >
                <button className='h-full rounded bg-slate-600 p-6 text-center font-bold text-4xl'>{'<'}</button>
                <motion.div className="w-1/4 relative z-30  p-2 h-full font-bold text-left text-slate-200 bg-slate-700  rounded" >

                    <FcFlashOn className='w-full opacity-10 -z-40 absolute h-full inline-block ' />
                    <h1 className='text-center uppercase py-4'>Variety of Question Types</h1>
                    <ul className='z- max-w-md z-50 space-y-1  list-disc list-inside text-gray-200'>
                        <li>multiple-choice</li>
                        <li>true/false</li>
                        <li>short answer</li>
                        <li>and more...</li>
                    </ul>
                </motion.div>
                <div className="w-1/4 p-2 h-full text-slate-200 text-center bg-slate-700 rounded " ></div>
                <div className="w-1/4 p-2 h-full text-slate-200 text-center bg-slate-700 rounded " ></div>
                <div className="w-1/4 p-2 h-full text-slate-200 text-center bg-slate-700 rounded " ></div>
                <button className='h-full rounded bg-slate-600 p-6 text-center font-bold text-4xl'>{'>'}</button>

            </div>
        </section>
    )
}
