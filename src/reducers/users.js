import { INITIAL_DATA } from './../actions/shared'

export function users(state = {}, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return { ...state, ...action.users }
        default:
            return state
    }
}