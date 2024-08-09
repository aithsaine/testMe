"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Nav from '@/components/Nav'
import { FcGoogle } from 'react-icons/fc'
import { Bars } from "react-loading-icons"





export default function page() {
    const [wait, setWait] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setWait(true)
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            if (result?.ok) {
                toast.success("Successfully signed in")
                router.push("/dashboard");
            } else {
                toast.error(result?.error || "Something went wrong");
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            setWait(true)
        }

    };
    return (<>
        <Nav />
        <div className='flex space-y-4 flex-col items-center justify-center'>
            <h1 className='text-white text-2xl uppercase'>Login</h1>

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
                className={"bg-gradient-to-r text-sm lg:text md:w-1/4 w-1/2 from-orange-100 flex justify-center py-1 px-8 rounded to-orange-700"}>{wait ? <Bars className='h-full w-6 text-green-900' /> : 'Login with credentials'}</motion.button>

            <motion.button
                onClick={handleSubmit}
                whileTap={{ scale: 0.9 }}
                className={"bg-gradient-to-r text-sm lg:text-lg md:w-1/4 w-1/2 from-sky-800 flex justify-center via-blue-300 py-1 px-8 rounded to-red-700"}><FcGoogle className='h-full' /> Google Authentication</motion.button>

            <div className="flex md:w-1/4 text-sm lg:text w-1/2 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <Link href={"/register"} className='rounded p-1'

                >create new account</Link >
            </div>
        </div>
    </>
    )
}
