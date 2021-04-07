import { INITIAL_DATA } from './../actions/shared'
import { SET_QUESTION, SET_QUESTION_ANSWER } from './../actions/questions'

export function questions(state = {}, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return { ...state, ...action.questions }
        case SET_QUESTION:
            return {
                ...state, [action.question.id]: {
                    id: action.question.id,
                    author: action.question.author,
                    optionOne: action.question.optionOne,
                    optionTwo: action.question.optionTwo,
                    timestamp: action.question.timestamp
                }
            }
        case SET_QUESTION_ANSWER:
            return {
                ...state,
                [action.obj.qid]: {
                    ...state[action.obj.qid], [action.obj.answer]: {
                        ...state[action.obj.qid][action.obj.answer], votes: [
                            ...state[action.obj.qid][action.obj.answer].votes, action.obj.authedUser
                        ]
                    }
                }
            }
        default:
            return state
    }
}