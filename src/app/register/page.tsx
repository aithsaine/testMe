"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import axios from "axios"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'

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
        <>
            <div className='flex min-h-screen space-y-4 flex-col items-center justify-center'>
                <h1 className='text-white text-2xl uppercase'>Register</h1>

                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="first name">First Name</label> */}
                    <input onChange={(e: any) => setFirstName(e.target.value)} type="text" placeholder='first name...'
                        className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                    />
                </div>
                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="last name">Lasr Name</label> */}
                    <input onChange={(e: any) => setLastName(e.target.value)} type="text" placeholder='last name...'
                        className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                    />
                </div>
                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="last name">Lasr Name</label> */}
                    <input onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder='email...'
                        className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                    />
                </div>
                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="last name">Lasr Name</label> */}
                    <input onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder='password...'
                        className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                    />
                </div>
                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="last name">Lasr Name</label> */}
                    <input onChange={(e: any) => setConfirmPsd(e.target.value)} type="password" placeholder='confirm password...'
                        className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                    />
                </div>
                <motion.button
                    onClick={registerHandler}
                    whileTap={{ scale: 0.9 }}
                    className={"bg-gradient-to-r font-sans font-bold items-center md:w-1/4 w-2/3 from-sky-800 flex justify-center via-blue-300 px-1 py-2 rounded to-red-700"}
                >Register</motion.button>
                <Link href={"/login"}
                    className={"bg-gradient-to-r font-sans font-bold items-center md:w-1/4 w-2/3 from-sky-800 flex justify-center via-blue-300 px-1 py-2 rounded to-red-700"}

                >Already has an account</Link >

                <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                    {/* <label htmlFor="last name">Lasr Name</label> */}

                </div>
            </div>
        </>
    )
}
