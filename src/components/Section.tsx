"use client"
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lottie from 'react-lottie';
import animationdata from "../assets/lottiefiles/anime.json"
export default function Section() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <section className='flex md:flex-row flex-col text-white'>
            <div className="md:w-1/2">
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className=" flex flex-col items-center justify-center md:w-1/2">
                <h1 className="text-center text-2xl  ">Welcome to <span className='bg-gradient-to-r from-sky-600 via-red-500 my-6 to-sky-800 inline-block text-transparent bg-clip-text '>testMe</span> </h1>
                <p className="mb-3 font-bold leading-9 text-sky-200 w-4/5 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold  first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                    At testme, we are dedicated to helping you master programming languages, improve your linguistic skills, and excel in math. Our online testing platform offers a wide range of practice tests designed to assess your knowledge and boost your confidence in these critical areas.                </p>
            </div>
        </section>
    )
}
