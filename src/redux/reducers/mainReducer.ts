import { GETQUESTIONS } from "../action/types";
import { Question } from "../action/actionCreator"
const initialState = {
    example: "is working",
    questions: [],
    subjects: [],
}
type Action = {
    type: string;
    payload?: any;
};
type State = {
    questions: Question[]
    subjects: String[]
}
export const mainReducer = (state: State = initialState, action: Action) => {

    switch (action.type) {
        case GETQUESTIONS:
            return { ...state, questions: action.payload, subjects: new Set(action.payload.map((item: Question) => item.subject)) }
    }

    return state
}