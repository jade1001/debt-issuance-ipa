import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { history } from './Redux/_helpers/history'
import { alertActions } from './Redux/_actions/alert.actions'
import { PrivateRoute } from './components/PrivateRoute'
import DashboardMain from './components/DashboardMain'
import { Login } from './components/Login'

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
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path='/' component={DashboardMain} />
            <Route path='/login' component={Login} />
            <Redirect from='*' to='/' />
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
