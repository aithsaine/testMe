"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { fancyTimeFormat } from '../../helpers/secondsToTime'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { FcApproval, FcApprove } from 'react-icons/fc'
import ProgressBar from "@ramonak/react-progress-bar";
const TestCard = ({ name, duration, isPassed, QuestionsCount, result = 0 }: { name: String, duration: Number, isPassed: Boolean, QuestionsCount: Number, result: number }) => {

    const router = useRouter()
    return (
        <div
            style={{
                minWidth: "220px", // Slightly wider for better content accommodation
                backdropFilter: "blur(60px)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)", // Softer shadow for a more elegant look
                border: "2px solid rgba(255, 255, 255, 0.25)", // Slightly more visible border
                borderRadius: "12px", // Softer rounded corners
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))" // Subtle gradient background
            }}
            className='flex flex-col hover:scale-105 transition-transform duration-300 w-1/5 justify-between border p-4 rounded-lg m-3'
        >
            {/* Header */}
            <div className="header-Card text-center text-lg font-semibold text-white">
                {name}
            </div>

            <hr className='w-full text-gray-500 my-3' />

            {/* Footer */}
            <div className="footer-Card text-sm text-gray-300 flex justify-between flex-col space-y-2">
                <span>Duration: {fancyTimeFormat(duration)} min</span>
                <span>Questions: {String(QuestionsCount)}</span>
                <span>
                    {isPassed ? (
                        <ProgressBar
                            className='m-0.5 text-xs rounded-full overflow-hidden'
                            height='18px'
                            bgColor={result > 50 ? 'green' : 'red'}
                            completed={isNaN(result) ? 0 : Math.trunc(result)}
                        />
                    ) : (
                        <span className="text-blue-400 cursor-pointer hover:underline">Pass exam</span>
                    )}
                </span>
            </div>

            {/* Button */}
            <motion.button
                onClick={() => {
                    if (!isPassed) {
                        Swal.fire({
                            timerProgressBar: true,
                            title: "If you start this test, you cannot leave until it is finished.",
                            showCancelButton: true,
                            confirmButtonText: "Start",
                        }).then(result => {
                            if (result.isConfirmed) {
                                router.push(`/test/${name}`);
                            }
                        });
                    } else {
                        router.push(`/test/${name}`);
                    }
                }}
                whileTap={{ scale: isPassed ? 1 : 0.95 }}
                className={`bg-gradient-to-r w-full py-2 px-6 rounded-lg text-center mt-4 transition-all duration-300 ${isPassed ? "underline text-gray-400 cursor-pointer" : "from-blue-600 to-blue-400 text-white cursor-pointer hover:from-blue-700 hover:to-blue-500"}`}
            >
                {isPassed ? "Your Answers" : "Pass Test"}
            </motion.button>
        </div>


    )
}

export default TestCard