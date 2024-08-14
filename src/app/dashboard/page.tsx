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
import Loader from "@/components/Loader";





export default function Dashboard() {
    const [testPerformanceData, setTestPerformanceData] = useState([])
    const [res, setRes] = useState<any>()
    const { answers, questions, subjects }: { answers: Answer[], questions: Question[] } = useSelector(state => state)
    useEffect(() => {
        setRes(answers.map(answer => {
            return {
                subject: decodeURIComponent(answer.subject as string),
                percentage: Math.trunc(answer.questions.filter(qst => qst.answer == questions.find(item => item.id == qst.questionId)?.correctAnswer).length / answer.questions.length * 100),
                date: answer.createdAt
            }
        }))
    }, [answers, questions])
    useEffect(() => {
        res && setTestPerformanceData(res.map(item => { return { name: item.subject, percentage: item.percentage } }))
    }, [res])

    return (
        <div className="container mx-auto p-8 space-y-12">
            <motion.h1
                className="text-5xl font-extrabold text-white text-center mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                Dashboard
            </motion.h1>

            {/* Cards Section */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                {[{
                    title: "Total Tests",
                    value: subjects && subjects.length,
                    color: "text-teal-400",
                }, {
                    title: "Tests Passed",
                    value: answers && answers.length,
                    color: "text-green-400",
                }, {
                    title: "Average Score",
                    value: res && (res.length > 0 ? Math.trunc(res.reduce((prev, next) => prev + Number(next.percentage), 0) / res.length) : 0),
                    color: "text-yellow-400",
                }, {
                    title: "Failed Tests",
                    value: res && res.filter(item => item.percentage < 50).length,
                    color: "text-red-400",
                }].map((card, index) => (
                    <motion.div
                        key={index}
                        className={`bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-transform duration-200`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">{card.title}</h3>
                        <p className={`text-3xl ${card.color}`}>{card.value ?? <Bars className="w-5" />}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Latest Tests */}
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
                            {res && res.map((test, index) => (
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
        </div>
    );
}
