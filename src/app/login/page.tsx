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
        <div className='flex min-h-screen space-y-4 flex-col items-center justify-center'>
            <h1 className='font-sans line-clamp-5 text-white text-2xl uppercase'>Login</h1>

            <div className="flex md:w-1/4 w-2/3 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="email" name='email' id='email' onChange={(e: any) => setEmail(e.target.value)} autoComplete='OFF' placeholder='Email...'
                    className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'
                />
            </div>
            <div className="flex md:w-1/4 w-2/3 text-white font-sans space-y-1 flex-col">
                {/* <label htmlFor="last name">Lasr Name</label> */}
                <input type="password" name='password' id='password' onChange={(e: any) => setPassword(e.target.value)} placeholder='Password...'
                    className='rounded bg-opacity-90	 px-1 py-2  backdrop-blur-3xl border-2 border-white bg-transparent'

                />
            </div>

            <motion.button
                onClick={handleSubmit}
                whileTap={{ scale: 0.9 }}
                className={"bg-gradient-to-r font-sans font-bold items-center md:w-1/4 w-2/3 from-sky-800 flex justify-center via-blue-300 px-1 py-2 rounded to-red-700"}
            >{wait ? <Bars className='h-full w-6 text-green-900' /> : 'Login with credentials'}</motion.button>

            <motion.button
                whileTap={{ scale: 0.9 }}
                className={"bg-gradient-to-r  items-center space-x-2 md:w-1/4 w-2/3 from-sky-800 flex justify-center via-blue-300 px-1 py-2 rounded to-red-700"}><FcGoogle className='h-full' /><span className='font-sans font-bold'>Google Authentication</span> </motion.button>
            <Link href={"/register"}
                className={"bg-gradient-to-r font-sans font-bold items-center md:w-1/4 w-2/3 from-sky-800 flex justify-center via-blue-300 px-1 py-2 rounded to-red-700"}
            >SignUp</Link >

        </div>
    </>
    )
}
