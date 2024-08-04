"use client"
import Loader from '@/components/Loader'
import { Question } from '@/redux/action/actionCreator'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { DNA } from 'react-loader-spinner'

export default function page({ params }: { params: { subject: String } }) {
    const [questions, setQuestions] = useState<Question[]>()
    const [loading, setLoading] = useState(true)
    const getQuestions = async () => {

        try {
            const response = await axios.get("/api/question", { params: { subject: params.subject } });
            if (response.data.success)
                setQuestions(response.data.questions)

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getQuestions()

    }, [])

    if (loading) {
        return (

            <Loader />
        )
    }

    return (questions &&
        <div className='flex space-x-2 items-center space-y-2'>
            <div className="w-3/12 rounded border border-sky-200 shadow-sky-500 shadow-lg min-h-screen">
                {questions && Array.from({ length: questions.length }, (x, index)).map((item: any) => <span key={item}>{item.index}</span>)}
            </div>
            <div className="w-9/12 rounded border border-sky-200 shadow-sky-500 shadow-lg min-h-screen">
                <div className=' fixed bottom-4 right-4 space-x-2 space-y-2'>

                    <button className="bg-red-600 text-lg text-white font-bold py-2 rounded border-white shadow-sm w-24 shadow-white">Leave</button>
                    <button className="bg-green-600 text-lg text-white font-bold py-2 rounded border-white shadow-sm w-24 shadow-white">Continue</button>
                </div>
            </div>

        </div>
    )
}
