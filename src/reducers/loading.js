import { INITIAL_DATA } from "../actions/shared";

export function loading(state = true, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return false
        default:
            return state
    }
}