"use client"
import React from 'react'
import { motion } from "framer-motion"
import Lottie from 'react-lottie'
import animationdata from "../assets/lottiefiles/studied.json"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8, // Delay between each child animation
            delayChildren: 0.3,  // Initial delay before children animations start
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

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
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true }}
            className='flex md:flex-row flex-col text-white'
        >
            <motion.div variants={itemVariants} className="md:w-1/2">
                <Lottie options={defaultOptions} />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center md:w-1/2">
                <h1 className="text-center text-2xl">
                    Welcome to <span className='bg-gradient-to-r from-sky-600 via-red-500 my-6 to-sky-800 inline-block text-transparent bg-clip-text'>testMe</span>
                </h1>
                <p className="mb-3 font-bold leading-9 text-white w-4/5 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                    At testme, we are dedicated to helping you master programming languages, improve your linguistic skills, and excel in math. Our online testing platform offers a wide range of practice tests designed to assess your knowledge and boost your confidence in these critical areas.
                </p>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={"bg-gradient-to-r w-4/5 from-orange-100 text-lg py-1 px-8 rounded to-orange-700"}>Join Now</motion.button>
            </motion.div>
        </motion.section>
    );
}
