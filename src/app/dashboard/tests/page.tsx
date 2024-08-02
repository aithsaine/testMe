"use client"
import TestCard from '@/components/TestCard'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
    const subjects = useSelector((state: any) => state.subjects)
    return (
        <div className='flex flex-wrap'>
            {subjects && subjects.map((item: any) => <TestCard key={item.name} name={item.name} duration={item.questionsCount * 20} QuestionsCount={item.questionsCount} isPassed={false} />)}


        </div>
    )
}
