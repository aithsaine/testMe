import { GETQUESTIONS } from "./types"

export type Question = {
    id: String,
    subject: String,
    title: String,
    choices: String[],
    answer: String[]
}

export const getAllQuestions = (questions: Question[]) => {
    return {
        type: GETQUESTIONS,
        payload: questions
    }
}