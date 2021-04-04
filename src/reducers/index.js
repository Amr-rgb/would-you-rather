import { combineReducers } from 'redux'
import { users } from './users'
import { questions } from './questions'
import { authedUser } from './authedUser'
import { loading } from './loading'

export default combineReducers({
    users,
    questions,
    authedUser,
    loading
})