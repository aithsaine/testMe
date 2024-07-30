"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import axios from "axios"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function page() {
    const navigate = useRouter()
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPsd, setConfirmPsd] = useState();

    const registerHandler = async () => {
        try {
            const response = await axios.post("/api/register", { firstname, lastname, email, password, confirmPsd })

            toast.success(response.data.message)
            return navigate.push("/login")



        } catch (error: any) {
            if (error.response.status == 422)
                return toast.error(error.response.data.message)

            return toast.error("somethink wrong");
        }
    }
    return (
        <div className='flex space-y-4 flex-col items-center justify-center'>
            <h1 className='text-white text-2xl uppercase'>Register</h1>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="first name">First Name</label> */}
                <input onChange={(e: any) => setFirstName(e.target.value)} type="text" placeholder='first name...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input onChange={(e: any) => setLastName(e.target.value)} type="text" placeholder='last name...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder='email...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder='password...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input onChange={(e: any) => setConfirmPsd(e.target.value)} type="password" placeholder='confirm password...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <motion.button
                onClick={registerHandler}
                whileTap={{ scale: 0.9 }}
                className={"bg-gradient-to-r md:w-1/4 w-1/2 from-orange-100 text-lg py-1 px-8 rounded to-orange-700"}>Register</motion.button>

            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <Link href={"/login"} className='rounded p-1'

                >already has an account</Link >
            </div>
        </div>
    )
}
