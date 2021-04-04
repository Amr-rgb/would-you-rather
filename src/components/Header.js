import { connect } from "react-redux";
import src from "./../imgs/logo.svg";
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <nav>
                <img src={src} alt="logo" />
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/add">ADD QUESTION</Link></li>
                    <li><Link to="/leaderboard">LEADERBOARD</Link></li>
                </ul>
            </nav>

            <div className="autheduser-info">
                <div>
                    <p>{props.authedUser}</p>
                    <button>Sign Out</button>
                </div>
                <img className='avatar' src={props.avatar} alt="profile avatar" />
            </div>
        </div>
    )
}

export default connect(state => {
    const authedUser = state.users[state.authedUser]
    if (authedUser)
        return {
            authedUser: authedUser.name,
            avatar: authedUser.avatarURL
        }
})(Header)