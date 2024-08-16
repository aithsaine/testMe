"use client";

import { useSession } from "next-auth/react";
import React from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";

// Dynamically import the Lottie component, disabling server-side rendering
const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

import animationData from "../assets/lottiefiles/studied.json"; // Ensure this path is correct

export default function Section() {
    const { data } = useSession();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <section className='flex flex-col md:flex-row my-10 text-white font-bold p-8'>
            <div className="md:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-md">
                    {/* Render the Lottie animation */}
                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center text-center md:text-left mt-8 md:mt-0">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to <span className='bg-gradient-to-r from-sky-600 via-red-500 to-sky-800 text-transparent bg-clip-text'>testMe</span>
                </h1>
                <p className="mb-6 text-lg font-bold text-gray-300">
                    At testMe, we are dedicated to helping you master programming languages, improve your linguistic skills, and excel in math. Our online testing platform offers a wide range of practice tests designed to assess your knowledge and boost your confidence in these critical areas.
                </p>
                {data?.user ? (
                    <Link href={"/dashboard"}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 text-lg py-3 px-12 rounded-full font-semibold transition-all duration-300"
                    >
                        {"Go To Dashboard"}
                    </Link>
                ) : (
                    <Link href={"/register"}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 text-lg py-3 px-12 rounded-full font-semibold transition-all duration-300"
                    >
                        {"Join Now"}
                    </Link>
                )}
            </div>
        </section>
    );
}
