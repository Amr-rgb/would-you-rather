import history from './../history'
import { _saveQuestionAnswer, _saveQuestion } from './../_DATA'

export const SET_QUESTION = 'SET_QUESTION'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'

function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question
    }
}

function setQuestionAnswer(obj) {
    return {
        type: SET_QUESTION_ANSWER,
        obj
    }
}


export function handleSetQuestion(question) {
    return (dispatch) => {
        _saveQuestion(question)
            .then(question => dispatch(setQuestion(question)))
            .then(_ => {
                history.push(`/`)
            })
    }
}

export function handleSetAnswer(obj) {
    return (dispatch) => {
        _saveQuestionAnswer(obj)
            .then(_ => dispatch(setQuestionAnswer(obj)))
            .then(_ => {
                history.push(`/questions/${obj.qid}`)
            })
    }
}