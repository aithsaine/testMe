"use client"
import React from 'react'
import { motion } from "framer-motion"
import { fancyTimeFormat } from '../../helpers/secondsToTime'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import ProgressBar from "@ramonak/react-progress-bar"

const TestCard = ({ name, duration, isPassed, QuestionsCount, result = 0 }: { name: String, duration: Number, isPassed: Boolean, QuestionsCount: Number, result: number }) => {
    const router = useRouter()

    return (
        <div
            style={{
                minWidth: "180px",
                backdropFilter: "blur(40px)",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.4))"
            }}
            className='flex flex-col hover:scale-105 transition-transform duration-200 w-1/6 justify-between p-3 rounded-lg m-2'
        >
            {/* Header */}
            <div className="text-center text-sm font-medium text-teal-300">
                {name}
            </div>

            <hr className='w-full text-teal-400 my-2' />

            {/* Footer */}
            <div className="text-xs text-gray-300 space-y-1">
                <span>Duration: {fancyTimeFormat(duration)} min</span>
                <span>Questions: {QuestionsCount}</span>
                <span>
                    {isPassed ? (
                        <ProgressBar
                            className='m-0.5 text-xs rounded-full overflow-hidden'
                            height='14px'
                            bgColor={result > 50 ? 'limegreen' : 'crimson'}
                            completed={isNaN(result) ? 0 : Math.trunc(result)}
                        />
                    ) : (
                        <span className="text-teal-400 cursor-pointer hover:underline">Pass exam</span>
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
                className={`bg-gradient-to-r w-full py-1.5 px-4 rounded text-center mt-3 transition-all duration-200 ${isPassed ? "underline text-teal-400 cursor-pointer" : "from-purple-600 to-indigo-500 text-white cursor-pointer hover:from-purple-700 hover:to-indigo-600"}`}
            >
                {isPassed ? "Your Answers" : "Pass Test"}
            </motion.button>
        </div>
    )
}

export default TestCard
