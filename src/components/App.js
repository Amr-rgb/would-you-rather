import React from 'react';
import './../App.css';
import handleInitialData from './../actions/shared'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import PollsContainer from './PollsContainer';
import Login from './Login';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(setAuthedUser(null))
    this.props.dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading)
      return <h1>loading...</h1>

    if (!this.props.authedUser)
      return (
        <Router>
          <Redirect to="/login" />
          <Route path='/login'>
            <Login />
          </Route>
        </Router>
      )

    else
      return (
        <Router>
          <div className="App">
            <Header />
            <main>
              <Redirect to="/" />
              <Switch>
                <Route exact path='/'>
                  <PollsContainer />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      );
  }
}

export default connect(state => ({
  authedUser: state.authedUser,
  loading: state.loading
}))(App);
