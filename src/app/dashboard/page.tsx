"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";




export default function Dashboard() {
    const [res, setRes] = useState<any>()
    const [topScores, setTopScores]: any = useState()
    const { answers, questions, subjects }: any = useSelector(state => state)
    useEffect(() => {
        setRes(answers.map((answer: any) => {
            return {
                subject: decodeURIComponent(answer.subject as string),
                percentage: Math.trunc(answer.questions.filter((qst: any) => qst.answer == questions.find((item: any) => item.id == qst.questionId)?.correctAnswer).length / answer.questions.length * 100),
                date: answer.createdAt
            }
        }))
        res && setTopScores(res.sort((a: any, b: any) => b.percentage - a.percentage)
        )
    }, [])
    useEffect(() => {
        setRes(answers.map((answer: any) => {
            return {
                subject: decodeURIComponent(answer.subject as string),
                percentage: Math.trunc(answer.questions.filter((qst: any) => qst.answer == questions.find((item: any) => item.id == qst.questionId)?.correctAnswer).length / answer.questions.length * 100),
                date: answer.createdAt
            }
        }))
        res && setTopScores(res.sort((a: any, b: any) => b.percentage - a.percentage)
        )
    }, [answers, questions])
    return (
        <div className="container mx-auto p-4 space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Total Tests Conducted</h2>
                    <p className="text-3xl font-bold">{subjects && subjects.length}</p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Passed Tests</h2>
                    <p className="text-3xl font-bold">{answers && answers.length}</p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Average Test Score</h2>
                    <p className="text-3xl font-bold">{res && (res.length > 0 ? Math.trunc(res.reduce((prev: any, next: any) => prev + Number(next.percentage), 0) / res.length) : 0)}%</p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Failed Tests</h2>
                    <p className="text-3xl font-bold">{res && res.filter((item: any) => item.percentage < 50).length}</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Recent Test Attempts</h2>
                <div className="space-y-4">
                    {res && res[res.length - 1] &&
                        <div
                            key={res[res.length - 1].percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >
                            <div>
                                <p className="font-bold">{res[res.length - 1].subject}</p>
                                <p className="text-sm text-gray-400">{(new Date(res[res.length - 1].date).toLocaleString())}</p>
                            </div>
                            <p className="text-xl font-bold">{res[res.length - 1].percentage}%</p>
                        </div>
                    }
                    {res && res[res.length - 2] &&
                        <div
                            key={res[res.length - 2].percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >

                            <div>
                                <p className="font-bold">{res[res.length - 2].subject}</p>
                                <p className="text-sm text-gray-400">{(new Date(res[res.length - 2].date).toLocaleString())}</p>
                            </div>
                            <p className="text-xl font-bold">{res[res.length - 2].percentage}%</p>
                        </div>
                    }
                    {res && res[res.length - 3] &&
                        <div
                            key={res[res.length - 3].percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >
                            <div>
                                <p className="font-bold">{res[res.length - 3].subject}</p>
                                <p className="text-sm text-gray-400">{(new Date(res[res.length - 3].date).toLocaleString())}</p>
                            </div>
                            <p className="text-xl font-bold">{res[res.length - 3].percentage}%</p>
                        </div>
                    }
                </div>
            </div>

            {/* Top Scorers */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Top Scorers</h2>
                <div className="space-y-4">
                    {topScores && topScores[0] && (
                        <div
                            key={topScores[0]?.percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >
                            <p className="font-bold">{topScores[0].subject}</p>
                            <p className="text-xl font-bold">{topScores[0].percentage}%</p>
                        </div>
                    )}
                    {topScores && topScores[1] && (
                        <div
                            key={topScores[1].percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >
                            <p className="font-bold">{topScores[1].subject}</p>
                            <p className="text-xl font-bold">{topScores[1].percentage}%</p>
                        </div>
                    )}
                    {topScores && topScores[2] && (
                        <div
                            key={topScores[2].percentage}
                            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg text-white"
                        >
                            <p className="font-bold">{topScores[2].subject}</p>
                            <p className="text-xl font-bold">{topScores[2].percentage}%</p>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}
