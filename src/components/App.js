import React from 'react';
// import ReactDOM from 'react-dom';
import './../App.css';
import handleInitialData from './../actions/shared'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(setAuthedUser(null))
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <div className="App">
        <h1>hello world!</h1>
      </div>
    );
  }
}

export default connect()(App);
