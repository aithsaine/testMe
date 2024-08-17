"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { Bars } from "react-loading-icons"

export default function Page() {
    const [wait, setWait] = useState(false)
    const [email, setEmail] = useState<string>("demo@mail.com")
    const [password, setPassword] = useState<string>("demodemo")
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
        } finally {
            setWait(false)
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-center text-white uppercase'>Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name='email'
                        defaultValue={email}
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        autoComplete='off'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                    <input
                        type="password"
                        defaultValue={password}
                        name='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 items-center justify-center text-center flex text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md shadow-md hover:from-blue-700 hover:to-blue-500 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                    >
                        {wait ? <Bars className='h-full w-6 text-green-500' /> : 'Login with Credentials'}
                    </motion.button>
                </form>

                <div className="flex items-center justify-center space-x-2 mt-6">
                    <div className="w-1/3 h-px bg-gray-600"></div>
                    <span className="text-sm text-gray-400">or</span>
                    <div className="w-1/3 h-px bg-gray-600"></div>
                </div>

                <motion.button
                    onClick={() => signIn('google')}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full py-2 mt-2 space-x-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                >
                    <FcGoogle className='w-5 h-5' />
                    <span className="font-semibold">Sign in with Google</span>
                </motion.button>

                <Link href="/register" className="block mt-4 text-sm font-semibold text-center text-blue-400 hover:underline">
                    Don’t have an account? Sign Up
                </Link>
            </div>
        </div>
    )
}
