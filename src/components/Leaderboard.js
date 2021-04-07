import { connect } from "react-redux";

function Leaderboard({ users }) {

    const orderedUsers = [...Object.values(users)]
    orderedUsers.forEach(item => {
        item.score = Object.keys(item.answers).length + item.questions.length
    })

    orderedUsers.sort((a, b) => {
        if (a.score === b.score)
            return 0
        return a.score < b.score ? 1 : -1
    })

    return (
        <div className="leaderboard">
            {orderedUsers.map(user => (
                <div className="user" key={user.id}>
                    <div className="author-info">
                        <img className='avatar' src={user.avatarURL} alt="author" />
                        <p>{user.name}</p>
                    </div>

                    <div className="user-content">
                        <div className="left">
                            <p>Answered Questions: {Object.keys(user.answers).length}</p>
                            <p>Created Questions: {user.questions.length}</p>
                        </div>
                        <div className="right">
                            <p>score</p>
                            <p>{user.score}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default connect(state => ({
    users: state.users
}))(Leaderboard)