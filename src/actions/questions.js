import history from './../history'
import { _saveQuestionAnswer } from './../_DATA'

export const SET_QUESTION = 'SET_QUESTION'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'

export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question
    }
}

export function setQuestionAnswer(obj) {
    return {
        type: SET_QUESTION_ANSWER,
        obj
    }
}


export function handleSetAnswer(obj) {
    return (dispatch) => {
        _saveQuestionAnswer(obj)
            .then(_ => dispatch(setQuestionAnswer(obj)))
            .then(_ => {
                history.push(`/poll/${obj.qid}`)
            })
    }
}