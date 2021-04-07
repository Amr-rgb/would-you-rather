import history from "./../history"

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function removeAuthedUser() {
    return {
        type: REMOVE_AUTHED_USER
    }
}

export function handleSetAuthedUser(id, path) {
    return (dispatch) => {
        (async () => {
            await dispatch(setAuthedUser(id))
            history.push(path === '/login' ? '/' : path)
        })()
    }
}