export const SET_QUESTION = 'SET_QUESTION'

export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question
    }
}