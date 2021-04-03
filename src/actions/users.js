export const SET_USER = 'SET_USER'

export function setUsers(user) {
    return {
        type: SET_USER,
        user
    }
}