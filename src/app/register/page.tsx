"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import axios from "axios"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export default function Page() {
    const navigate = useRouter()
    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPsd, setConfirmPsd] = useState<string>("");

    const registerHandler = async () => {
        try {
            const response = await axios.post("/api/register", { firstname, lastname, email, password, confirmPsd })
            toast.success(response.data.message)
            navigate.push("/login")
        } catch (error: any) {
            if (error.response.status == 422)
                toast.error(error.response.data.message)
            else
                toast.error("Something went wrong");
        }
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-center text-white uppercase'>Register</h1>

                <div className="space-y-4">
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder='First Name'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder='Last Name'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                    <input
                        onChange={(e) => setConfirmPsd(e.target.value)}
                        type="password"
                        placeholder='Confirm Password'
                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                    />
                </div>

                <motion.button
                    onClick={registerHandler}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md shadow-md hover:from-blue-700 hover:to-blue-500 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                >
                    Register
                </motion.button>

                <div className="flex items-center justify-center space-x-2">
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

                <Link href="/login" className="block mt-4 text-sm font-semibold text-center text-blue-400 hover:underline">
                    Already have an account? Sign in
                </Link>
            </div>
        </div>
    )
}
