import { SET_AUTHED_USER } from './../actions/authedUser'
import { REMOVE_AUTHED_USER } from './../actions/authedUser'

export function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        case REMOVE_AUTHED_USER:
            return null
        default:
            return state
    }
}