import { INITIAL_DATA } from './../actions/shared'

export function questions(state = {}, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return { ...state, ...action.questions }
        default:
            return state
    }
}