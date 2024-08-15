"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { Answer, Question } from "@/redux/action/actionCreator";
import { Bars } from "react-loading-icons"

export default function Page() {

    const [testPerformanceData, setTestPerformanceData] = useState([])
    const [res, setRes] = useState<any>()
    const { answers, questions, subjects }: any = useSelector(state => state)
    useEffect(() => {
        setRes(answers.map((answer: any) => {
            return {
                subject: decodeURIComponent(answer.subject as string),
                percentage: Math.trunc(answer.questions.filter((qst: any) => qst.answer == questions.find((item: any) => item.id == qst.questionId)?.correctAnswer).length / answer.questions.length * 100),
                date: answer?.createdAt
            }
        }))
    }, [answers, questions])
    useEffect(() => {
        res && setTestPerformanceData(res.map((item: any) => { return { name: item.subject, percentage: item.percentage } }))
    }, [res])


    return (
        <>
            {/* Test Performance Chart */}
            <motion.div
                className="bg-gray-900 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">Test Performance Overview</h2>
                <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                    {testPerformanceData && <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={testPerformanceData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="name" stroke="#ddd" />
                            <YAxis stroke="#ddd" />
                            <Tooltip contentStyle={{ backgroundColor: "#333", borderColor: "#666" }} />
                            <Bar dataKey="percentage" fill="#4fd1c5" />
                        </BarChart>
                    </ResponsiveContainer>}
                </div>
            </motion.div>
            <motion.div
                className="bg-gray-900 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">Latest Test Attempts</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 text-white">
                        <thead>
                            <tr className="w-full bg-gray-700">
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Test Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Score</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res && res.map((test: any, index: number) => (
                                <tr key={index} className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">{test.subject}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{test.date}</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${test.percentage >= 50 ? "text-green-400" : "text-red-400"}`}>
                                        {test.percentage}%
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${test.percentage >= 50 ? "text-green-400" : "text-red-400"}`}>
                                        {test.percentage >= 50 ? "Passed" : "Failed"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

        </>
    )
}
