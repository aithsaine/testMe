import { INITIALISED, PASSEDTEST } from "../action/types";
import { Question, Answer } from "../action/actionCreator"
import { Reducer } from "redux";
const initialState = {
    example: "is working",
    questions: [],
    subjects: [],
    answers: []
}
type Action = {
    type: string;
    payload?: any;
};
type State = {
    questions: Question[]
    subjects: String[],
    answers: Answer[]
}
export const mainReducer: Reducer = (state: State = initialState, action: Action) => {

    switch (action.type) {
        case INITIALISED:
            const sbj = new Set(action.payload.questions.map((item: Question) => item.subject))
            return { ...state, questions: action.payload.questions, answers: action.payload.answers, subjects: Array.from(sbj).map(((item: any) => { return { name: item, questionsCount: action.payload.questions.filter((elem: Question) => elem.subject == item).length } })) }
        case PASSEDTEST:
            return { ...state, answers: [...state.answers, action.payload] }
    }

    return state
}