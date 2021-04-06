import { useState } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

function PollsContainer({ questions, users, authedUser }) {
    const unansweredQues = []
    const answeredQues = []
    Object.values(questions).forEach(question => {
        if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
            answeredQues.push(question)
        } else {
            unansweredQues.push(question)
        }
    })

    const [unanswered] = useState(unansweredQues)
    const [answered] = useState(answeredQues)
    const [show, setShow] = useState('unanswered')

    const clickHandler = () => {
        setShow(prevState => {
            return prevState === 'unanswered' ? 'answered' : 'unanswered'
        })
    }

    return (
        <div className="polls-container">
            <div className="btns">
                <button
                    disabled={show === 'unanswered' ? true : false}
                    onClick={clickHandler}>unanswered polls</button>
                <button
                    disabled={show === 'answered' ? true : false}
                    onClick={clickHandler}>answered polls</button>
            </div>

            {show === 'unanswered' && unanswered.map(question => {
                const userInfo = users[question.author]

                return (
                    <Poll
                        key={question.id}
                        id={question.id}
                        author={userInfo.name}
                        imgSrc={userInfo.avatarURL}
                        optOne={question.optionOne}
                        optTwo={question.optionTwo}
                        btn='vote'
                    />
                )
            })}
            {show === 'answered' && answered.map(question => {
                const userInfo = users[question.author]

                return (
                    <Poll
                        key={question.id}
                        id={question.id}
                        author={userInfo.name}
                        imgSrc={userInfo.avatarURL}
                        optOne={question.optionOne}
                        optTwo={question.optionTwo}
                        btn='See Details'
                    />
                )
            })}
        </div>
    )
}

export default connect((state) => ({
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
}))(PollsContainer)