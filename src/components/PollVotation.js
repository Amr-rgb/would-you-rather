import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleSetAnswer } from '../actions/questions'
import PollDetails from './PollDetails'

function PollVotation({ authedUser, author, avatar, questions, dispatch }) {
    const [value, setValue] = useState('optionOne')
    const { id } = useParams()
    const question = questions[id]

    if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
        return <PollDetails />
    }

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const clickHandler = async () => {
        dispatch(handleSetAnswer({ authedUser, qid: id, answer: value }))
    }

    return (
        <div className='poll-votation'>
            <div className="author-info">
                <img className='avatar' src={avatar} alt="author" />
                <p>{author}</p>
            </div>

            <div className="poll-content">
                <div className="poll-content-text">
                    <p>would you rather:</p>

                    <div className="input-field">
                        <label htmlFor="opt1">{question.optionOne.text}</label>
                        <input
                            type="radio"
                            name="vote"
                            id="opt1"
                            value='optionOne'
                            checked={value === 'optionOne' ? true : false}
                            onChange={(e) => changeHandler(e)} />
                    </div>

                    <span>OR</span><br />

                    <div className="input-field">
                        <label htmlFor="opt2">{question.optionTwo.text}</label>
                        <input
                            type="radio"
                            name="vote"
                            id="opt2"
                            value='optionTwo'
                            checked={value === 'optionTwo' ? true : false}
                            onChange={(e) => changeHandler(e)} />
                    </div>
                </div>
                <button onClick={clickHandler}>vote</button>
            </div>
        </div>
    )
}

export default connect(state => {
    const authedUser = state.users[state.authedUser]
    return {
        authedUser: state.authedUser,
        author: authedUser.name,
        avatar: authedUser.avatarURL,
        questions: state.questions,
    }
})(PollVotation)