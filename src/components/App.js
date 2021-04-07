import React from 'react';
import './../App.css';
import { handleInitialData } from './../actions/shared'
import { connect } from 'react-redux'
import PollsContainer from './PollsContainer';
import Login from './Login';
import Header from './Header';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import PollVotation from './PollVotation';
import history from './../history'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const path = window.location.pathname

    if (this.props.loading)
      return <h1 style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>loading...</h1>

    if (!this.props.authedUser)
      return (
        <Router history={history}>
          <Redirect to="/login" />
          <Route path='/login'>
            <Login path={path} />
          </Route>
        </Router>
      )

    else
      return (
        <Router history={history}>
          <div className="App">
            <Header path={path} />
            <main>
              <Switch>
                <Route exact path='/'>
                  <PollsContainer />
                </Route>
                <Route path='/add'>
                  <NewQuestion />
                </Route>
                <Route path='/leaderboard'>
                  <Leaderboard />
                </Route>
                <Route path='/questions/:id'>
                  <PollVotation />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/notfound'>
                  <NotFound />
                </Route>
                <Redirect from='*' to='/notfound' />
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
