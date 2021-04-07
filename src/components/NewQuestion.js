import React from "react"
import { connect } from "react-redux"
import { handleSetQuestion } from "../actions/questions"

class NewQuestion extends React.Component {

    submitHandler(e) {
        e.preventDefault()
        const optOne = this.optOne.value
        const optTwo = this.optTwo.value

        if (optOne && optTwo) {
            this.props.dispatch(handleSetQuestion({
                author: this.props.authedUser,
                optionOneText: optOne,
                optionTwoText: optTwo
            }))
        } else {
            alert('please complete all options')
        }
    }
    render() {
        return (
            <div className="new-question">
                <h1>Create New Question</h1>
                <h2>Would you rather:</h2>

                <form onSubmit={(e) => this.submitHandler(e)}>
                    <label htmlFor="opt1">Option One</label>
                    <input
                        type="text"
                        id='opt1'
                        ref={input => this.optOne = input}
                    /><br />

                    <label htmlFor="opt2">Option Two</label>
                    <input
                        type="text"
                        id='opt2'
                        ref={input => this.optTwo = input}
                    /><br />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default connect(state => ({
    authedUser: state.authedUser
}))(NewQuestion)