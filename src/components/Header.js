import { connect } from "react-redux";
import src from "./../imgs/logo.svg";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { removeAuthedUser } from './../actions/authedUser'

function Header(props) {
    const [active, setValue] = useState(props.path)

    const clickHandler = (e) => {
        setValue(e.target.attributes.href.value)
    }

    const signoutHandler = (e) => {
        props.dispatch(removeAuthedUser())
    }

    return (
        <div className="header">
            <nav>
                <img className='logo' src={src} alt="logo" />
                <ul>
                    <li><Link to="/"
                        className={active === '/' ? 'active' : null}
                        onClick={(e) => clickHandler(e)}>HOME</Link></li>
                    <li><Link to="/add"
                        className={active === '/add' ? 'active' : null}
                        onClick={(e) => clickHandler(e)}>ADD QUESTION</Link></li>
                    <li><Link to="/leaderboard"
                        className={active === '/leaderboard' ? 'active' : null}
                        onClick={(e) => clickHandler(e)}>LEADERBOARD</Link></li>
                </ul>
            </nav>

            <div className="autheduser-info">
                <div>
                    <p>{props.authedUser}</p>
                    <button onClick={signoutHandler}>Sign Out</button>
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