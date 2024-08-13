"use client"
import SkeletonCard from '@/components/SkeletonCard'
import TestCard from '@/components/TestCard'
import { Answer, Question } from '@/redux/action/actionCreator'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
    const { subjects, answers, questions } = useSelector((state: any) => state)
    const passedTest: any[] = answers.map((item: Answer) => decodeURIComponent(item.subject as string))
    if (!subjects.length) {
        return (
            < div className='flex flex-wrap' >
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        )
    }
    return (

        < div className='grid grid-cols-1 overflow-autoigt   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ' >
            {subjects && subjects.map((item: any) => <TestCard key={item.name} name={item.name} duration={item.questionsCount * 20} QuestionsCount={item.questionsCount} isPassed={passedTest.find(elem => item.name == elem)} result={passedTest.find(elem => item.name == decodeURIComponent(elem as string)) ? Number(answers.find((elem: Answer) => decodeURIComponent(elem.subject as string) == item.name)?.questions.filter((elem: any) => elem.answer != "").filter((elem: any) => elem.answer == questions.find((quest: Question) => quest.id == elem.questionId).correctAnswer).length) / item.questionsCount * 100 : 0} />)
            }
        </div >
    )
}
