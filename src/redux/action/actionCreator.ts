import { INITIALISED, PASSEDTEST } from "./types"

export type Question = {
    id: String
    subject: String
    title: String
    choices: String[]
    correctAnswer: String
}
export type Answer = {
    id: String
    userId: String
    subject: String
    questions: any[]

}
export const getAllQuestions = (questions: Question[], answers: Answer[]) => {
    return {
        type: INITIALISED,
        payload: {

            questions,
            answers
        }

    }
}

export const passedTest = (answer: Answer) => {
    return {
        type: PASSEDTEST,
        payload: answer
    }
}