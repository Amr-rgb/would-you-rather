import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {
    constructor() {
        super()
        this.state = { value: 'sarahedo' }
    }

    changeHandler = (e) => {
        const { id } = e.target
        this.setState({ value: id })
    }

    submitHandler = () => {
        this.props.dispatch(setAuthedUser(this.state.value))
    }

    render() {
        return (
            <div>
                <h1>would you rather?</h1>

                {Object.values(this.props.users).map(user => (
                    <div className="user" key={user.id} >
                        <img src={user.avatarURL} alt="acount" />

                        <div>
                            <label htmlFor={user.id}>{user.name}</label>
                            <input
                                type="radio"
                                id={user.id}
                                name="acount"
                                value={this.state.value}
                                checked={this.state.value === user.id}
                                onChange={(e) => this.changeHandler(e)}
                            />

                        </div>
                    </div>
                ))}

                <button onClick={this.submitHandler}>Log In</button>
            </div>

        )
    }
}

export default connect(state => ({
    users: state.users
}))(Login)