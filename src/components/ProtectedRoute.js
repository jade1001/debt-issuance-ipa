import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        // console.log(localStorage)
        <Component {...props} />
      )
    }
  />
)
