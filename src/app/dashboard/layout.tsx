"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"

import { LuActivity, LuFlaskRound, LuHome, LuLayoutDashboard, LuLogOut, LuUserCircle } from 'react-icons/lu';
import prisma from '../../../prisma/client';
import axios from 'axios';
import { getAllQuestions } from '@/redux/action/actionCreator';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { data } = useSession()
    const dispatch = useDispatch()
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const resp = await axios.get("/api/questions")
                dispatch(getAllQuestions(resp.data.questions, resp.data.answers ?? []))

            } catch (error) {
                console.log(error)

            }
        }
        getQuestions()
    }, [])
    return (
        <div className='flex py-4 items-start mt-10 px-6 min-h-screen space-x-2 justify-center text-white '>
            <div style={{ width: "60px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }} className=" flex text-4xl flex-col rounded-xl h-full py-4 space-y-6 bg-00">
                <Link href={"/dashboard"} onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuLayoutDashboard className='w-full' />
                    <span className='-right-24 hidden z-auto fixed font-bold text-sm'>Dashboard</span>
                </Link>
                <Link href={"/"} onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuHome className='w-full' />
                    <span className='-right-14 hidden z-50 fixed font-bold text-sm'>Home</span>
                </Link>
                <Link href={"/dashboard/tests"} onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuFlaskRound className='w-full' />
                    <span className='-right-14 hidden z-50 fixed font-bold text-sm'>Tests</span>
                </Link>
                <div onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuUserCircle className='w-full' />
                    <span className='-right-14 hidden z-50 fixed font-bold text-sm'>Profile</span>
                </div>
                <div onMouseEnter={(e) => {
                    const elem: any = e.currentTarget
                    if (elem) {

                        elem.lastElementChild.classList.remove("hidden");
                    }
                }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative flex items-center '>

                    <LuActivity className='w-full' />
                    <span className='-right-14 hidden z-50 fixed font-bold text-sm'>Tests</span>
                </div>
                <div
                    onClick={async (e) => signOut({ callbackUrl: 'http://localhost:3000/' })}

                    onMouseEnter={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.remove("hidden");
                        }
                    }}
                    onMouseLeave={(e) => {
                        const elem: any = e.currentTarget
                        if (elem) {

                            elem.lastElementChild.classList.add("hidden");
                        }
                    }}
                    className='relative cursor-pointer flex items-center '>

                    <LuLogOut className='w-full' />
                    <span className='-right-14 hidden z-50 fixed font-bold text-sm'>LogOut</span>
                </div>

            </div>
            <div style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 4px rgba(227,228,237)" }} className="w-full p-2 h-full rounded-xl  ">
                <h1 className='text-white text-2xl text-center'>Welcom {data?.user?.firstname} {data?.user.lastname}</h1>
                {children}
            </div>
        </div >
    );
}

export default RootLayout