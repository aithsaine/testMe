"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'





export default function page() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result?.ok) {
            router.push("/dashboard");
        } else {
            toast.error(result?.error || "Something went wrong");
        }
    };
    return (
        <div className='flex space-y-4 flex-col items-center justify-center'>
            <h1 className='text-white text-2xl uppercase'>Register</h1>

            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="email" onChange={(e: any) => setEmail(e.target.value)} placeholder='email...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>
            <div className="flex md:w-1/4 w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="password" onChange={(e: any) => setPassword(e.target.value)} placeholder='password...' className='rounded p-1 bg-inherit'
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                />
            </div>

            <motion.button
                onClick={handleSubmit}
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
