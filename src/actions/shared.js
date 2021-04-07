import { _getUsers, _getQuestions } from './../_DATA'

export const INITIAL_DATA = 'INITIAL_DATA'

function initialData(users, questions) {
    return {
        type: INITIAL_DATA,
        users,
        questions
    }
}

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([
            _getUsers(), _getQuestions()
        ]).then(([users, questions]) => {
            dispatch(initialData(users, questions))
        })
    }
}