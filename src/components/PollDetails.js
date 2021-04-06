import { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

function PollDetails({ authedUser, author, avatar, questions }) {

    const { id } = useParams()
    const question = questions[id]

    const [valueOne] = useState(question.optionOne.votes.length)
    const [valueTwo] = useState(question.optionTwo.votes.length)
    const [max] = useState(question.optionOne.votes.length + question.optionTwo.votes.length)

    return (
        <div className='poll-details'>
            <div className="author-info">
                <img className='avatar' src={avatar} alt="author" />
                <p>{author}</p>
            </div>

            <div className="poll-content">
                <div className="poll-content-text">
                    <div className="input-field">
                        <label htmlFor="opt1"
                            className={question.optionOne.votes.includes(authedUser) ? 'voted' : null}>{question.optionOne.text}
                        </label><br />

                        <progress value={valueOne} max={max} className={(valueOne / max * 100).toFixed(0)}></progress>
                        <p>{valueOne} out of {max} Votes</p>
                    </div>

                    <div className="input-field">
                        <label htmlFor="opt2"
                            className={question.optionTwo.votes.includes(authedUser) ? 'voted' : null}>{question.optionTwo.text}
                        </label><br />

                        <progress value={valueTwo} max={max} className={(valueTwo / max * 100).toFixed(0)}></progress>
                        <p>{valueTwo} out of {max} Votes</p>
                    </div>
                </div>
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
})(PollDetails)