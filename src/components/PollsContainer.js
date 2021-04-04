import { connect } from 'react-redux'
import Poll from './Poll'

function PollsContainer({ questions, users }) {

    return (
        <div className="polls-container">
            <button>unanswered polls</button>
            <button>answered polls</button>

            {Object.values(questions).map(question => {
                const userInfo = users[question.author]

                return (
                    <Poll
                        key={question.id}
                        author={userInfo.name}
                        imgSrc={userInfo.avatarURL}
                        optOne={question.optionOne.text}
                    />
                )
            })}
        </div>
    )
}

export default connect((state) => ({
    questions: state.questions,
    users: state.users
}))(PollsContainer)