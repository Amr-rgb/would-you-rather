import { INITIAL_DATA } from './../actions/shared'
import { SET_QUESTION, SET_QUESTION_ANSWER } from './../actions/questions'

export function users(state = {}, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return { ...state, ...action.users }
        case SET_QUESTION:
            return {
                ...state, [action.question.author]: {
                    ...state[action.question.author], questions: [
                        ...state[action.question.author].questions,
                        action.question.id
                    ]
                }
            }
        case SET_QUESTION_ANSWER:
            return {
                ...state, [action.obj.authedUser]: {
                    ...state[action.obj.authedUser], answers: {
                        ...state[action.obj.authedUser].answers,
                        [action.obj.qid]: action.obj.answer
                    }
                }
            }
        default:
            return state
    }
}