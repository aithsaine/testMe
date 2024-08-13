"use client"
import Loader from '@/components/Loader'
import { Question, passedTest } from '@/redux/action/actionCreator'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import Bars from 'react-loading-icons/dist/esm/components/bars'
import { toast } from 'sonner'
export default function page({ params }: { params: { subject: String } }) {
    const [questions, setQuestions] = useState<Question[]>()
    const router = useRouter()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState<number>(60)//seconds
    const [currentQst, setCurrentQst] = useState<number>(1)//this will know the number of question
    const [isPlaying, setIsPlaying] = useState(true)
    const [wait, setWait] = useState(false)
    const [isAnswerd, setIsAnswerd] = useState(false)
    const [oldAnswer, setOldAnswer] = useState<any>(null)



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
        setWait(true)
        try {
            const save = await axios.post('/api/answer/save', { answer: result })
            if (save?.data.success) {
                dispatch(passedTest(save.data.answer))
                Swal.fire("Saved!", "", "success");
                router.push("/dashboard/tests")
            }

        } catch (e) {

        } finally {
            setWait(false)
        }
    }
    const NextHandler = () => {
        if (!isAnswerd) {

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
        else {
            if (Number(currentQst) < Number(questions?.length)) {

                setCurrentQst(currentQst + 1)
            }
            else {
                return router.push("/dashboard/tests")
            }
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
            }

        });
    }


    const getQuestions = async () => {

        try {
            const resp = await axios.get("/api/answer/get", { params: { subject: encodeURIComponent(params.subject as string) } })
            if (resp.data.success) {
                setIsAnswerd(true)
                setOldAnswer(resp.data.answer)
            }

        } catch (error) {


        } finally {
            const response = await axios.get("/api/question", { params: { subject: decodeURIComponent(params.subject as string) } });

            if (response.data.success)
                setQuestions(response.data.questions)
            setResult({ ...result, questions: response.data.questions.map((item: Question) => { return { questionId: item.id, answer: "" } }) })
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

    return (questions?.length &&
        <div className='flex  items-start h-screen '>
            <div className=" flex flex-wrap justify-between items-center  w-1/12 lg:w-3/12 rounded-lg border border-sky-200   px-1 shadow-sky-500  shadow-lg min-h-screen">
                {questions && Array.from({ length: questions.length }, (item: Question, idx) => <div
                    style={!isAnswerd ? { backdropFilter: "blur(60px)", boxShadow: "0px 0px 10pxrgba(192, 38, 211, 1,0.37)" } : {}}
                    onClick={e => {
                        if (isAnswerd)
                            setCurrentQst(idx + 1)
                    }}
                    className={`w-full lg:w-20 h-max ${isAnswerd ? questions[idx].correctAnswer == oldAnswer.questions.find(elem => elem.questionId == questions[idx].id).answer ? "cursor-pointer bg-green-800" : "cursor-pointer bg-red-700" : ''} lg:h-20 flex flex-col rounded items-center lg:m-2 justify-center ${Number(idx) == Number(currentQst) - 1 ? "border-sky-600" : ""}  border-4 border-collapse`} key={idx}>
                    <h1 className='text-xs hidden lg:inline-block'>Question N°</h1>
                    <span>{idx + 1}</span>
                </div >)}
            </div>
            <div className="w-11/12 lg:w-9/12 p-4  rounded-xl border border-sky-200  shadow-sky-500 shadow-lg min-h-screen">
                <div className="w-full flex flex-col-reverse items-center  lg:flex-row min-h-20 justify-center lg:justify-between ">

                    <div className={`${isAnswerd ? "w-full" : "lg:w-5/6"} w-full flex items-center justify-center min-h-24 lg:min-h-16  bg-white text-black rounded-2xl lg:text-2xl text-center `}>{questions[(currentQst) - 1].title}</div>{/*title of question*/}
                    {!isAnswerd && <div className='lg:w-1/6 w-full  flex justify-end'>

                        <div className=' lg:w-auto ' >
                            <CountdownCircleTimer
                                isPlaying={isPlaying}
                                key={Number(currentQst)}
                                duration={counter}
                                colors={['#A020F0', '#F7B801', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                                size={100}
                                onComplete={() => {
                                    if (!isAnswerd)
                                        if (currentQst !== questions.length) {

                                            setCurrentQst(currentQst + 1)
                                        }
                                    return ({ shouldRepeat: currentQst !== questions.length, delay: 1 })
                                }} // Repeat the timer with a delay of 1 second
                            >
                                {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>
                        </div>
                    </div>}
                </div>
                <div className="flex h-screen flex-col items-center mt-4 space-y-4 w-full ">
                    {questions && questions[currentQst - 1].choices.map((item, index) =>
                        <button type="button" onClick={e => {
                            if (!isAnswerd)
                                setResult((prevResult) => ({
                                    ...prevResult,
                                    questions: prevResult.questions.map((elem2) =>
                                        elem2.questionId === questions[currentQst - 1].id
                                            ? { questionId: questions[currentQst - 1].id, answer: item }
                                            : elem2
                                    ),
                                }));
                        }} key={index} className={`w-full ${(isAnswerd && oldAnswer) ? (oldAnswer.questions.find(elem => elem.questionId == questions[currentQst - 1].id).answer !== "" && questions[currentQst - 1].correctAnswer == item ? "bg-green-600" : oldAnswer.questions.find(elem => elem.questionId == questions[currentQst - 1].id).answer == item && questions[currentQst - 1].correctAnswer != item ? "bg-red-700" : "bg-fuchsia-700") : 'bg-fuchsia-700'} rounded-2xl ${!isAnswerd ? (result.questions.find((elem) => elem.questionId == questions[currentQst - 1].id && elem.answer == item) ? "bg-sky-600" : "bg-fuchsia-700") : ""}   min-h-10 lg:min-h-20 text-white  lg:text-2xl m-2`}>{item}
                        </button>)}
                </div>
                <div className=' fixed bottom-4  right-4 space-x-2 space-y-2'>

                    {!isAnswerd && <button onClick={leaveHandler} className="bg-red-600 lg:text-lg text-white font-bold py-1 lg:py-2 rounded border-white shadow-sm w-20 lg:w-24 shadow-white">
                        {wait ? <Bars className='h-full w-6 text-white' /> : "Leave"}

                    </button>}
                    < button className="bg-green-600 lg:text-lg text-white font-bold py-1 lg:py-2 rounded border-white shadow-sm  w-20 lg:w-24 shadow-white"
                        onClick={NextHandler}>
                        {wait ? <Bars className='h-full w-6 text-white' /> : currentQst != questions.length ? "Continue" : isAnswerd ? "Exit" : "Finished"}
                    </button>
                </div>
            </div>

        </div >
    )
}
