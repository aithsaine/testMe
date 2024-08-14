"use client"
import SkeletonCard from '@/components/SkeletonCard'
import TestCard from '@/components/TestCard'
import { Answer, Question } from '@/redux/action/actionCreator'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ITEMS_PER_PAGE = 8; // Number of items per page

export default function Page() {
    const { subjects, answers, questions } = useSelector((state: any) => state)
    const [filter, setFilter] = useState<'all' | 'passed' | 'Pass'>('all')
    const [currentPage, setCurrentPage] = useState(1)

    const passedTest: any[] = answers.map((item: Answer) => decodeURIComponent(item.subject as string))

    const filteredSubjects = subjects.filter((item: any) => {
        const isPassed = passedTest.includes(item.name);
        if (filter === 'all') return true;
        if (filter === 'passed') return isPassed;
        if (filter === 'Pass') return !isPassed;
    });

    // Reset to page 1 when filter changes
    useEffect(() => {
        setCurrentPage(1)
    }, [filter])

    // Pagination logic
    const totalPages = Math.ceil(filteredSubjects.length / ITEMS_PER_PAGE)
    const paginatedSubjects = filteredSubjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    if (!subjects.length) {
        return (
            <div className='flex flex-wrap'>
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
        )
    }

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Filter Buttons */}

            <div className='flex justify-start space-x-4 py-4'>
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    All
                </button>
                <button
                    onClick={() => setFilter('passed')}
                    className={`px-4 py-2 rounded-lg ${filter === 'passed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}>
                    Passed
                </button>
                <button
                    onClick={() => setFilter('Pass')}
                    className={`px-4 py-2 rounded-lg ${filter === 'Pass' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}>
                    Pass
                </button>
            </div>

            {/* Test Cards */}
            <div className='flex-grow'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {paginatedSubjects.map((item: any) => (
                        <TestCard
                            key={item.name}
                            name={item.name}
                            duration={item.questionsCount * 20}
                            QuestionsCount={item.questionsCount}
                            isPassed={passedTest.includes(item.name)}
                            result={
                                passedTest.includes(item.name)
                                    ? Number(answers.find((elem: Answer) => decodeURIComponent(elem.subject as string) === item.name)?.questions.filter((elem: any) => elem.answer !== "").filter((elem: any) => elem.answer === questions.find((quest: Question) => quest.id === elem.questionId).correctAnswer).length) / item.questionsCount * 100
                                    : 0
                            }
                        />
                    ))}

                </div>
                {/* Pagination Controls */}
                <div className='flex justify-center py-4'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='px-4 py-2 rounded-lg bg-gray-200 text-black'>
                        Previous
                    </button>
                    <span className='px-4 py-2'>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 rounded-lg bg-gray-200 text-black'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
