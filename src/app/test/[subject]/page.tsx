"use client"
import Loader from '@/components/Loader'
import { Question } from '@/redux/action/actionCreator'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
export default function page({ params }: { params: { subject: String } }) {
    const [questions, setQuestions] = useState<Question[]>()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    let [counter, setCounter] = useState<number>(60)//seconds
    let [currentQst, setCurrentQst] = useState<number>(1)//this will know the number of question
    const { data } = useSession()
    let [isPlaying, setIsPlaying] = useState(true)



    type Answer = {
        subject: String;
        questions: {
            questionId: String;
            answer: String;
        }[];
    };

    const [result, setResult] = useState<Answer>({
        subject: params.subject,
        questions: []
    })

    const saveHandler = async () => {
        try {
            const save = await axios.post('/api/answer/save', { answer: result })
            if (save?.data.success) {
                Swal.fire("Saved!", "", "success");

                router.push("/dashboard/tests")
            }

        } catch (e) {

        }
    }
    const NextHandler = () => {
        if (Number(currentQst) < Number(questions?.length)) {

            setCurrentQst(currentQst + 1)
            setCounter(60)
            setIsPlaying(false)
            setIsPlaying(true)
        }
        else if (Number(currentQst) == Number(questions?.length)) {
            Swal.fire({
                title: "Do you want to save the changes?",
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    saveHandler()
                }
            });
        }
    }

    const leaveHandler = () => {
        Swal.fire({
            title: "If You leave You cannot repeate this test?",
            showCancelButton: true,
            confirmButtonText: "Leave",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                saveHandler()
                router.push("/dashboard/tests")
            }

        });
    }


    const getQuestions = async () => {

        try {
            const response = await axios.get("/api/question", { params: { subject: params.subject } });
            if (response.data.success)
                setQuestions(response.data.questions)
            setResult({ ...result, questions: response.data.questions.map((item: Question) => { return { questionId: item.id, answer: "" } }) })

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
        <div className='flex space-x-2 items-start space-y-2'>
            <div className=" flex flex-wrap justify-between items-center  w-3/12 rounded-lg border border-sky-200 space-x-2 space-y-2 px-1 shadow-sky-500  shadow-lg min-h-screen">
                {questions && Array.from({ length: questions.length }, (_, idx) => <div
                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}

                    className={`w-20 h-20 flex flex-col rounded-ss-3xl  rounded-ee-3xl items-center justify-center ${Number(idx) <= Number(currentQst) - 1 ? "bg-gray-600" : ""}  border-2 border-collapse`} key={idx}>
                    <h1 className='text-sm'>Question N°</h1>
                    <span>{idx + 1}</span>
                </div >)}
            </div>
            <div className="w-9/12 p-4 rounded-xl border border-sky-200  shadow-sky-500 shadow-lg min-h-screen">
                <div className="w-full flex flex-col-reverse items-center  lg:flex-row min-h-20 justify-center lg:justify-between ">

                    <div className='lg:w-5/6 w-full flex items-center justify-center min-h-16  bg-white text-black rounded-2xl text-2xl text-center '>{questions[(currentQst) - 1].title}</div>{/*title of question*/}
                    <div className='lg:w-1/6 w-full  flex justify-end'>

                        <div className=' w-full lg:w-auto ' >
                            <CountdownCircleTimer
                                isPlaying={isPlaying}
                                key={Number(currentQst)}
                                duration={counter}
                                colors={['#A020F0', '#F7B801', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                                size={100}
                                onComplete={() => {
                                    if (currentQst !== questions.length) {

                                        setCurrentQst(currentQst + 1)
                                    }
                                    return ({ shouldRepeat: currentQst !== questions.length, delay: 1 })
                                }} // Repeat the timer with a delay of 1 second
                            >
                                {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>
                        </div>
                    </div>
                </div>
                <div className="flex h-screen flex-col items-center mt-4 space-y-4 w-full ">
                    {questions && questions[currentQst - 1].choices.map((item, index) => <button type="button" onClick={e => {

                        setResult((prevResult) => ({
                            ...prevResult,
                            questions: prevResult.questions.map((elem2) =>
                                elem2.questionId === questions[currentQst - 1].id
                                    ? { questionId: questions[currentQst - 1].id, answer: item }
                                    : elem2
                            ),
                        }));
                    }} key={index} className={`w-full rounded-2xl ${result.questions.find((elem) => elem.questionId == questions[currentQst - 1].id && elem.answer == item) ? "bg-sky-600" : "bg-fuchsia-600"}  min-h-20 text-white text-2xl m-2`}>{item}</button>)}
                </div>
                <div className=' fixed bottom-4  right-4 space-x-2 space-y-2'>

                    <button onClick={leaveHandler} className="bg-red-600 text-lg text-white font-bold py-2 rounded border-white shadow-sm w-24 shadow-white">Leave</button>
                    < button className="bg-green-600 text-lg text-white font-bold py-2 rounded border-white shadow-sm w-24 shadow-white"
                        onClick={NextHandler}
                    > {currentQst == questions.length ? "finished" : "Continue"}</button>
                </div>
            </div>

        </div >
    )
}
