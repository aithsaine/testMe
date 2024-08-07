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
            onMouseEnter={e => console.log(result)}
            style={{ minWidth: "200px", backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

            className='flex  flex-col hover:scale-105 w-1/6 justify-between border-2 p-2  rounded   m-2 '>
            <div className="header-Card text-center ">
                {name}
            </div>
            <hr className='w-full text-white my-2' />
            <div className="footer-Card text-sm text-inherit flex justify-between flex-col">
                <span>Duration: {fancyTimeFormat(duration)} min</span>
                <span>Questions: {String(QuestionsCount)}</span>
                <span>{isPassed ? <ProgressBar className='m-0.5 text-xs ' height='10px' bgColor={result > 50 ? 'green' : "red"} completed={isNaN(result) ? 0 : Math.trunc(result)} /> : "Passe exam"}</span>

            </div>
            <motion.button

                onClick={() => {
                    if (!isPassed)
                        Swal.fire({
                            timerProgressBar: true,
                            title: "If You Start this test you cannot leave until terminate?",
                            showCancelButton: true,
                            confirmButtonText: "Start",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                router.push(`/test/${name}`)
                            }
                        });
                }
                }
                whileTap={{ scale: isPassed ? 1 : 0.9 }}
                className={`bg-gradient-to-r cursor-pointer w-full ${isPassed ? "bg-zinc-600 disabled text-gray-400 " : "from-sky-300 to-blue-500"} flex justify-center py-1 px-8 rounded  `}>{isPassed ? "was Passed" : "Pass test"}</motion.button>

        </div>
    )
}

export default TestCard