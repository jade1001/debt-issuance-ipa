import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { history } from './Redux/_helpers/history'
import { alertActions } from './Redux/_actions/alert.actions'
import { PrivateRoute } from './components/PrivateRoute'
import { Login } from './components/Login'
import MainNavBar from './components/MainNavBar'
import { Alert } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    return (
      <div className='App'>
        {alert.message && (
          <Alert
            className={`alert ${alert.type}`}
            style={{ width: '20%', textAlign: 'center' }}
          >
            {alert.message}
          </Alert>
        )}
        <Router history={history}>
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={MainNavBar} />
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapState(state) {
  const { alert } = state
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}
export default connect(mapState, actionCreators)(App)
