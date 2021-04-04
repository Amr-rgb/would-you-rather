import React from 'react';
import './../App.css';
import handleInitialData from './../actions/shared'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import PollsContainer from './PollsContainer';
import Login from './Login';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(setAuthedUser(null))
    this.props.dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading)
      return <h1>loading...</h1>

    if (!this.props.authedUser)
      return <Login />

    return (
      <div className="App">
        <PollsContainer />
      </div>
    );
  }
}

export default connect(state => ({
  authedUser: state.authedUser,
  loading: state.loading
}))(App);
